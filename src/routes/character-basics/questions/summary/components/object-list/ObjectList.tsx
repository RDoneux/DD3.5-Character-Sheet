import styles from './ObjectList.module.css';

interface ObjectListProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  object: { [key: string]: any };
  valuesOnly?: boolean;
}

export default function ObjectList({ object, valuesOnly }: ObjectListProps) {
  return (
    <ul className={styles['unordered-list']}>
      {!valuesOnly &&
        Object.entries(object).map(([key, value]) => (
          <li key={key} className={styles['list-item']}>
            {value as string} {key}
          </li>
        ))}
      {valuesOnly &&
        Object.values(object).map((value) => (
          <li className={styles['list-item']}>{value as string}</li>
        ))}
    </ul>
  );
}
