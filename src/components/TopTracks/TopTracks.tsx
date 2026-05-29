import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getTopTracks } from '../../api/statsfm';
import type { Range } from '../../types';
import styles from './TopTracks.module.css';

const RANGES: { label: string; value: Range }[] = [
  { label: '4w', value: 'weeks' },
  { label: '6m', value: 'months' },
  { label: 'all', value: 'lifetime' },
];

export function TopTracks(): React.JSX.Element {
  const [range, setRange] = useState<Range>('lifetime');

  const { data, isLoading } = useQuery({
    queryKey: ['top-tracks', range],
    queryFn: () => getTopTracks(range),
  });

  const tracks = data
    ? [...data].sort((a, b) => b.streams - a.streams).slice(0, 20)
    : [];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>— top tracks</div>
        <div className={styles.rangeButtons}>
          {RANGES.map(r => (
            <button
              key={r.value}
              className={styles.rangeBtn}
              data-active={range === r.value}
              onClick={() => setRange(r.value)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.list}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={styles.skeleton} />
            ))
          : tracks.map((item, i) => (
              <motion.div
                key={`${item.track.id}-${range}`}
                className={styles.track}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
              >
                <span className={styles.position}>{i + 1}</span>
                {item.track.albums[0]?.image ? (
                  <img
                    src={item.track.albums[0].image}
                    alt={item.track.albums[0].name}
                    className={styles.artwork}
                  />
                ) : (
                  <div className={styles.artworkPlaceholder} />
                )}
                <div className={styles.info}>
                  <div className={styles.trackName}>{item.track.name}</div>
                  <div className={styles.artistName}>
                    {item.track.artists.map(a => a.name).join(', ')}
                  </div>
                </div>
                <span className={styles.streams}>{item.streams}×</span>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
