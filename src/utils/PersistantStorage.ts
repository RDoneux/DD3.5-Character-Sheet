const PREFIX = 'DD35:';

export function save<T>(key: string, value: T) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function load(key: string) {
  const value = localStorage.getItem(PREFIX + key);
  return value ? JSON.parse(value) : null;
}
