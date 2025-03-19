import NavMenu from '../nav-menu/NavMenu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles['container']}>
      <NavMenu />
      <div className={styles['wrapper']}>
        <h1>Dungeons & Dragons</h1>
        <h2>Companion (3.5E)</h2>
      </div>
    </header>
  );
}
