import RaceCard from '../../components/RaceCard';
import styles from './Race.module.css';

const races: RaceCardDetails[] = [
  {
    name: 'Human',
    description:
      'Versatile and ambitious, humans are the most adaptable race in the world. They have no natural enemies or allies, making them the most widespread and culturally diverse species. Their ingenuity and determination allow them to excel in any profession, from warriors to scholars.',
    image: 'human'
  },
  {
    name: 'Elf',
    description:
      'Graceful and wise, elves are beings of both ancient magic and keen archery. They are long-lived and see the world through a patient lens. Elves are deeply connected to nature and magic, often dwelling in vast forests or hidden enclaves',
    image: 'elf'
  },
  {
    name: 'Dwarf',
    description:
      'Sturdy, resilient, and fiercely loyal, dwarves are masters of craftsmanship and battle. Their underground citadels house some of the finest smiths and warriors in the world. Dwarves value tradition, honor, and a good ale, often holding grudges for generations against their foes',
    image: 'dwarf'
  },
  {
    name: 'Halfling',
    description:
      'Quick-witted and lucky, halflings are small adventurers with a love for excitement. Whether acting as merchants, thieves, or explorers, they thrive in high-stakes situations. Their small size and natural stealth make them excellent rogues and scouts',
    image: 'halfling'
  },
  {
    name: 'Gnome',
    description:
      'Inventive and full of mirth, gnomes are natural illusionists and tinkerers. They are small in stature but large in personality, often seen as mischievous yet kind-hearted. Their affinity for magic and technology makes them excellent spellcasters and craftsmen',
    image: 'gnome'
  },
  {
    name: 'Half-Elf',
    description:
      'Caught between two worlds, half-elves inherit the curiosity of humans and the grace of elves. They are natural diplomats, often serving as bridges between their parent races. While they lack a true homeland, their adaptability allows them to thrive anywhere',
    image: 'half-elf'
  },
  {
    name: 'Half-Orc',
    description:
      'Powerful and intimidating, half-orcs struggle to find acceptance among both humans and orcs. They inherit the brute strength of their orcish ancestors but often seek more than just a life of battle. Those who rise above their savage heritage can become great heroes—or terrifying villains',
    image: 'half-orc'
  }
];

export interface RaceCardDetails {
  name: string;
  description: string;
  image: string;
}

interface RaceProps {
  characterName: string;
  race: string;
  onChange: (card: RaceCardDetails) => void;
}

export default function Race({ characterName, race, onChange }: RaceProps) {
  return (
    <>
      <p>What race is {characterName}?</p>
      <p>
        Each race has specific advantages and disadvantages, anything from size,
        stature, to modifiers and special abilities.
      </p>
      <div className={styles['race-card-wrapper']}>
        {races.map((cardDetails: RaceCardDetails) => (
          <RaceCard
            race={race}
            key={cardDetails.name}
            raceCardDetails={cardDetails}
            onClick={onChange}
          />
        ))}
      </div>
    </>
  );
}
