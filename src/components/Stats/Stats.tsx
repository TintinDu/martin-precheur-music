import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../../api/statsfm';
import styles from './Stats.module.css';

function formatMinutes(ms: number): string {
  const hrs = Math.floor(ms / 3600000);
  if (hrs >= 1000) return `${(hrs / 1000).toFixed(1)}k`;
  return hrs.toLocaleString();
}

export function Stats(): React.JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: getUserStats,
  });

  if (isLoading) {
    return (
      <section className={styles.section}>
        <div className={styles.label}>— all time</div>
        <div className={styles.grid}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.skeleton} />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return <></>;

  return (
    <section className={styles.section}>
      <div className={styles.label}>— all time</div>
      <div className={styles.grid}>
        <div className={styles.stat}>
          <div className={styles.value}>{data.count.toLocaleString()}</div>
          <div className={styles.statLabel}>streams</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{formatMinutes(data.durationMs)}</div>
          <div className={styles.statLabel}>hours listened</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>
            {Math.floor(data.durationMs / 1000 / 60).toLocaleString()}
          </div>
          <div className={styles.statLabel}>minutes</div>
        </div>
      </div>
    </section>
  );
}
