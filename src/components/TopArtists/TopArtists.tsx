import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getTopArtists } from '../../api/statsfm';
import type { Range } from '../../types';
import styles from './TopArtists.module.css';

const RANGES: { label: string; value: Range }[] = [
  { label: '4w', value: 'weeks' },
  { label: '6m', value: 'months' },
  { label: 'all', value: 'lifetime' },
];

export function TopArtists(): React.JSX.Element {
  const [range, setRange] = useState<Range>('lifetime');

  const { data, isLoading } = useQuery({
    queryKey: ['top-artists', range],
    queryFn: () => getTopArtists(range),
  });

  const artists = data?.slice(0, 10) ?? [];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>— top artists</div>
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

      <div className={styles.grid}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={styles.skeleton} />
            ))
          : artists.map((item, i) => (
              <motion.div
                key={`${item.artist.id}-${range}`}
                className={styles.artistCard}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={item.artist.image}
                    alt={item.artist.name}
                    className={styles.image}
                  />
                  <span className={styles.rank}>#{item.position}</span>
                </div>
                <div className={styles.name}>{item.artist.name}</div>
                <div className={styles.streams}>{item.streams.toLocaleString()} plays</div>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
