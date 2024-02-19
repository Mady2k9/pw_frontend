// Define an enum for storage keys
type StorageKeys = 'TOKEN' | 'RANDOM_ID' | 'USER';

/**
 * StorageService: A TypeScript service for managing browser's localStorage.
 */
class StorageService {
  /**
   * Store a value in localStorage.
   *
   * @param key - The key under which the value should be stored.
   * @param value - The value to be stored.
   */
  set(key: StorageKeys, value: string | number | boolean | object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieve a value from localStorage.
   *
   * @param key - The key of the stored value.
   * @returns The retrieved value or null if the key doesn't exist.
   */
  get(key: StorageKeys): string | undefined | object {
    const item = localStorage.getItem(key);
    if (typeof item === 'string') return item;
    return item ? JSON.parse(item) : null;
  }

  /**
   * Remove a key-value pair from localStorage.
   *
   * @param key - The key of the value to be removed.
   */
  remove(key: StorageKeys): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all keys from localStorage.
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * Get all keys from localStorage.
   *
   * @returns An array of all keys in localStorage.
   */
  keys(): string[] {
    return Object.keys(localStorage);
  }
}

// Example Usage
export const storage = new StorageService();
