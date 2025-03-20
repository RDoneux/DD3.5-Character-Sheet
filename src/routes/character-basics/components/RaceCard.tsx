import { RaceCardDetails } from '../questions/race/Race';
import styles from './RaceCard.module.css';

interface RaceCardProps {
  raceCardDetails: RaceCardDetails;
}

export default function RaceCard({ raceCardDetails }: RaceCardProps) {
  return (
    <div className={styles['container']}>
      <h4 className={styles['name']}>{raceCardDetails.name}</h4>
      {raceCardDetails.image && (
        <img
          className={styles['image']}
          src={`/races/${raceCardDetails.image}.jpeg`}
        />
      )}
      {/* <p>{raceCardDetails.description}</p> */}
    </div>
  );
}
