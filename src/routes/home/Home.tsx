import { useNavigate } from 'react-router-dom';
import CallToActionButton from '../../components/button/CallToActionButton';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles['container']}>
      <h1>Dungeons & Dragons Companion (3.5)</h1>

      <p>This product is intended for use alongside the official Player's Guide, it is not intended to replace it.</p>

      <p>Please do your bit to support the creators, buy the guide if you haven't already.</p>

      <br/>

      <CallToActionButton onClick={() => navigate('/characters')} text='Characters' />
    </div>
  );
}
