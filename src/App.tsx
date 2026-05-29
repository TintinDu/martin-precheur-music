import { NowPlaying } from './components/NowPlaying/NowPlaying';
import { TopArtists } from './components/TopArtists/TopArtists';
import { TopTracks } from './components/TopTracks/TopTracks';
import { Stats } from './components/Stats/Stats';
import styles from './App.module.css';

export default function App(): React.JSX.Element {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>what i'm listening to</h1>
          <p className={styles.subtitle}>martin · stats.fm</p>
        </div>
      </header>

      <main className={styles.main}>
        <NowPlaying />
        <Stats />
        <TopArtists />
        <TopTracks />
      </main>

      <footer className={styles.footer}>
        <span>powered by stats.fm</span>
        <span>made with ♥ Claude</span>
      </footer>
    </div>
  );
}
