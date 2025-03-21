import styles from './Characters.module.css';
import Heading from '../../components/heading/Heading';

export default function Characters() {
    return (
        <div className={styles['container']}>
            <Heading size='L'>Characters</Heading>
        </div>
    );
}
