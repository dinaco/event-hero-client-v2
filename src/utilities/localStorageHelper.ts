export const getStoredData = (key: string): any | null => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

export const setStoredData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearStoredData = (key: string) => {
  localStorage.removeItem(key);
};

export const getStoredDataTokenName = (key: string) => `${key}_token`;
