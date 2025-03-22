import { Modal } from '@mui/material';
import styles from './ClassCard.module.css';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { ClassRole } from '../../../../interfaces/Class';

interface ClassCardProps {
  classCardDetails: ClassRole;
  clazz: string;
  onClick: (classCardDetails: ClassRole) => void;
}

export default function ClassCard({
  clazz,
  classCardDetails,
  onClick
}: ClassCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className={`${styles['container']} ${clazz === classCardDetails.name ? styles['active'] : ''}`}
        onClick={() => onClick(classCardDetails)}
      >
        <InfoIcon
          onClick={handleOpen}
          className={styles['info-icon']}
          color="primary"
        />
        <h4 className={styles['name']}>{classCardDetails.name}</h4>
        {classCardDetails.image && (
          <img
            className={styles['image']}
            src={`/classes/${classCardDetails.image}.jpeg`}
          />
        )}
      </div>
      <Modal open={open} onClose={handleClose} keepMounted>
        <div className={styles['modal']}>
          <h1>{classCardDetails.name}</h1>
          {classCardDetails.image && (
            <img
              className={styles['image']}
              src={`/classes/${classCardDetails.image}.jpeg`}
            />
          )}
          <p>{classCardDetails.description}</p>
        </div>
      </Modal>
    </>
  );
}
