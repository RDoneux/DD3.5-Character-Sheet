import styles from './ObjectList.module.css';

interface ObjectListProps {
  object: { [key: string]: string };
  valuesOnly?: boolean;
}

export default function ObjectList({ object, valuesOnly }: ObjectListProps) {
  return (
    <ul className={styles['unordered-list']}>
      {!valuesOnly &&
        Object.entries(object).map(([key, value]) => (
          <li className={styles['list-item']}>
            {value} {key}
          </li>
        ))}
      {valuesOnly &&
        Object.values(object).map((value) => (
          <li className={styles['list-item']}>{value}</li>
        ))}
    </ul>
  );
}
