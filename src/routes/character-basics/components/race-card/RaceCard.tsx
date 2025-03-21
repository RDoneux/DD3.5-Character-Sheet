import { Modal } from '@mui/material';
import { RaceCardDetails } from '../../questions/race/Race';
import styles from './RaceCard.module.css';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

interface RaceCardProps {
  raceCardDetails: RaceCardDetails;
  race: string;
  onClick: (raceCardDetails: RaceCardDetails) => void;
}

export default function RaceCard({
  raceCardDetails,
  race,
  onClick
}: RaceCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className={`${styles['container']} ${race === raceCardDetails.name ? styles['active'] : ''}`}
        onClick={() => onClick(raceCardDetails)}
      >
        <InfoIcon
          onClick={handleOpen}
          className={styles['info-icon']}
          color="primary"
        />
        <h4 className={styles['name']}>{raceCardDetails.name}</h4>
        {raceCardDetails.image && (
          <img
            className={styles['image']}
            src={`/races/${raceCardDetails.image}.jpeg`}
          />
        )}
      </div>
      <Modal open={open} onClose={handleClose} keepMounted>
        <div className={styles['modal']}>
          <h1>{raceCardDetails.name}</h1>
          {raceCardDetails.image && (
            <img
              className={styles['image']}
              src={`/races/${raceCardDetails.image}.jpeg`}
            />
          )}
          <p>{raceCardDetails.description}</p>
        </div>
      </Modal>
    </>
  );
}
