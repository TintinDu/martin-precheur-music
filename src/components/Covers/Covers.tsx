import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getPlaylistTracks } from '../../api/spotify';
import { MY_COVERS } from '../../data/covers';
import styles from './Covers.module.css';

export function Covers(): React.JSX.Element {
  const { data, isLoading, error } = useQuery({
    queryKey: ['covers-playlist'],
    queryFn: getPlaylistTracks,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <section className={styles.section}>
      <div className={styles.label}>// songs I know</div>
      <div className={styles.sublabel}>
        covers I can play · originals to listen · my versions when available
      </div>

      <div className={styles.list}>
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeleton} />
          ))}

        {error && (
          <div style={{ padding: 24, fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--color-red)' }}>
            ERROR: could not load playlist_
          </div>
        )}

        {data?.map((track, i) => {
          const coverUrl = MY_COVERS[track.id];
          const albumImg = track.album.images.find(img => img.width <= 300)?.url
            ?? track.album.images[0]?.url;

          return (
            <motion.div
              key={track.id}
              className={styles.track}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
            >
              {albumImg ? (
                <img src={albumImg} alt={track.album.name} className={styles.artwork} />
              ) : (
                <div className={styles.artworkPlaceholder} />
              )}

              <div className={styles.info}>
                <div className={styles.trackName}>{track.name}</div>
                <div className={styles.artistName}>
                  {track.artists.map(a => a.name).join(', ')}
                </div>
              </div>

              <div className={styles.links}>
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  data-type="spotify"
                  aria-label={`Listen to ${track.name} on Spotify`}
                >
                  ♪ original
                </a>

                {coverUrl ? (
                  <a
                    href={coverUrl}
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
          );
        })}
      </div>
    </section>
  );
}
