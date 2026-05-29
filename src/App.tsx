import { useState } from 'react';
import { NowPlaying } from './components/NowPlaying/NowPlaying';
import { TopArtists } from './components/TopArtists/TopArtists';
import { TopTracks } from './components/TopTracks/TopTracks';
import { Stats } from './components/Stats/Stats';
import styles from './App.module.css';

type Tab = 'listen' | 'play' | 'contact';

const TABS: { id: Tab; label: string }[] = [
  { id: 'listen', label: '// LISTEN' },
  { id: 'play', label: '// PLAY' },
  { id: 'contact', label: '// CONTACT' },
];

export default function App(): React.JSX.Element {
  const [tab, setTab] = useState<Tab>('listen');

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.bootLine}>SYSTEM READY_ </div>
        <h1 className={styles.title}>
          MARTIN
          <span>PRECHEUR</span>
        </h1>
        <p className={styles.tagline}>music · covers · production</p>
      </header>

      <nav className={styles.nav} aria-label="Sections">
        {TABS.map(t => (
          <button
            key={t.id}
            className={styles.navTab}
            data-active={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className={styles.main}>
        {tab === 'listen' && (
          <>
            <NowPlaying />
            <Stats />
            <TopArtists />
            <TopTracks />
          </>
        )}
        {tab === 'play' && <PlaySection />}
        {tab === 'contact' && <ContactSection />}
      </main>

      <footer className={styles.footer}>
        <span>TintinDu / martin-precheur-music</span>
        <span>made with ♥ Claude</span>
      </footer>
    </div>
  );
}

function PlaySection(): React.JSX.Element {
  return (
    <div style={{ padding: '60px 0', fontFamily: 'var(--font-pixel)', fontSize: '10px', color: 'var(--color-text-dim)', lineHeight: 2 }}>
      <div style={{ color: 'var(--color-blue)', marginBottom: 20 }}>// WHAT I PLAY</div>
      <p>Covers of songs I love.</p>
      <p style={{ marginTop: 12, color: 'var(--color-text-muted)' }}>Demo coming soon_</p>
    </div>
  );
}

function ContactSection(): React.JSX.Element {
  return (
    <div style={{ padding: '60px 0', fontFamily: 'var(--font-pixel)', fontSize: '10px', color: 'var(--color-text-dim)', lineHeight: 2 }}>
      <div style={{ color: 'var(--color-blue)', marginBottom: 20 }}>// GET IN TOUCH</div>
      <p>martindubois1602@gmail.com</p>
    </div>
  );
}
