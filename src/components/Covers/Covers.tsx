import { motion } from 'framer-motion';
import { COVERS } from '../../data/covers';
import styles from './Covers.module.css';

export function Covers(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.label}>// songs I know</div>
      <div className={styles.sublabel}>
        covers I can play · originals to listen · my versions when available
      </div>

      <div className={styles.list}>
        {COVERS.map((track, i) => (
          <motion.div
            key={track.id}
            className={styles.track}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04, duration: 0.25 }}
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

            <div className={styles.links}>
              <a
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                data-type="spotify"
                aria-label={`Listen to ${track.name} on Spotify`}
              >
                ♪ original
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
