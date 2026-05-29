import { useQuery } from '@tanstack/react-query';
import { getRecentStreams } from '../../api/statsfm';
import styles from './NowPlaying.module.css';

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export function NowPlaying(): React.JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ['recent'],
    queryFn: getRecentStreams,
  });

  const recent = data?.[0];

  return (
    <section className={styles.section}>
      <div className={styles.label}>// recently played</div>
      {isLoading && <div className={styles.skeleton} />}
      {recent && (
        <div className={styles.card}>
          <span className={styles.dot} aria-hidden="true" />
          {recent.track.albums[0]?.image ? (
            <img
              src={recent.track.albums[0].image}
              alt={recent.track.albums[0].name}
              className={styles.artwork}
            />
          ) : (
            <div className={styles.artworkPlaceholder} />
          )}
          <div className={styles.info}>
            <div className={styles.trackName}>{recent.track.name}</div>
            <div className={styles.artistName}>
              {recent.track.artists.map(a => a.name).join(', ')}
            </div>
            <div className={styles.time}>{timeAgo(recent.endTime)}</div>
          </div>
        </div>
      )}
    </section>
  );
}
