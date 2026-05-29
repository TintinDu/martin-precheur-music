import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COVERS } from '../../data/covers';
import styles from './Covers.module.css';

export function Covers(): React.JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const toggle = (id: string): void => {
    setOpenId(prev => prev === id ? null : id);
  };

  const filtered = COVERS.filter(t => {
    const q = search.toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.artists.some(a => a.toLowerCase().includes(q)) ||
      t.album.toLowerCase().includes(q)
    );
  });

  return (
    <section className={styles.section}>
      <div className={styles.label}>// songs I know</div>
      <div className={styles.sublabel}>
        covers I can play · click to preview · my versions when available
      </div>

      <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>▶</span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="SEARCH_"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search tracks"
        />
      </div>

      {filtered.length === 0 && (
        <div className={styles.noResults}>no results found_</div>
      )}

      <div className={styles.list}>
        {filtered.map((track, i) => {
          const isOpen = openId === track.id;

          return (
            <motion.div
              key={track.id}
              className={styles.track}
              data-open={isOpen}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
            >
              <div
                className={styles.trackHeader}
                onClick={() => toggle(track.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`${track.name} by ${track.artists.join(', ')}`}
                onKeyDown={(e) => { if (e.key === 'Enter') toggle(track.id); }}
              >
                <img
                  src={track.albumImage}
                  alt={track.album}
                  className={styles.artwork}
                />

                <div className={styles.info}>
                  <div className={styles.trackName}>{track.name}</div>
                  <div className={styles.artistName}>
                    {track.artists.join(', ')}
                  </div>
                </div>

                <div className={styles.links} onClick={e => e.stopPropagation()}>
                  <a
                    href={track.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    data-type="youtube"
                    aria-label={`Watch ${track.name} on YouTube`}
                  >
                    ▶ yt
                  </a>
                  {track.myVersionUrl ? (
                    <a
                      href={track.myVersionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      data-type="cover"
                      aria-label={`My cover of ${track.name}`}
                    >
                      ★ my version
                    </a>
                  ) : (
                    <span className={styles.linkBtn} data-type="soon">
                      soon_
                    </span>
                  )}
                </div>

                <button
                  className={styles.toggleBtn}
                  aria-label={isOpen ? 'Close player' : 'Open Spotify player'}
                  onClick={(e) => { e.stopPropagation(); toggle(track.id); }}
                >
                  {isOpen ? '▲' : '▼'}
                </button>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className={styles.embedPanel}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <iframe
                      className={styles.spotifyEmbed}
                      src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                      width="100%"
                      height="80"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={`Spotify player — ${track.name}`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
