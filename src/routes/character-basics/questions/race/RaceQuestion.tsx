import { races } from '../../../../data/RaceData';
import { Race } from '../../../../interfaces/Race';
import RaceCard from '../../components/race-card/RaceCard';
import styles from './Race.module.css';

interface RaceProps {
  characterName: string;
  race: string;
  onChange: (card: Race) => void;
}

export default function RaceQuestion({
  characterName,
  race,
  onChange
}: RaceProps) {
  return (
    <>
      <p>What race is {characterName}?</p>
      <p>
        Each race has specific advantages and disadvantages, anything from size,
        stature, to modifiers and special abilities.
      </p>
      <div className={styles['race-card-wrapper']}>
        {races.map((raceDetails: Race) => (
          <RaceCard
            race={race}
            key={raceDetails.name}
            raceCardDetails={raceDetails}
            onClick={onChange}
          />
        ))}
      </div>
    </>
  );
}
