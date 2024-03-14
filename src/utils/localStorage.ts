export async function handleSetItemInStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export async function handleRemoveItemFromStorage(key: string) {
  localStorage.removeItem(key);
  return true;
}

export function handleGetItemFromStorage(key: string) {
  const data = localStorage.getItem(key);
  return data ?? null;
}

export async function handleHasItemInStorage(key: string) {
  const data = localStorage.getItem(key);
  return !!data;
}

export async function handleClearStorage() {
  localStorage.clear();
}
