const SEARCH_HOSTPRY = 'searchHistory';

type Key = typeof SEARCH_HOSTPRY;

type LocalStorage = {
  [SEARCH_HOSTPRY]: string[];
};

export function setValueToLocalStorage(
  key: Key,
  value: LocalStorage[Key]
): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getValueFromLocalStorage(key: Key): LocalStorage[Key] | null {
  const value = localStorage.getItem(key);

  try {
    return value ? JSON.parse(value) : null;
  } catch (_) {
    return null;
  }
}
