/**
 * Safe storage wrapper that prevents SecurityError exceptions
 * in sandboxed, partitioned, or third-party iframe environments.
 */
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined') {
        return window.localStorage?.getItem(key) ?? null;
      }
    } catch (e) {
      // Silently catch SecurityError or QuotaExceededError
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem(key, value);
      }
    } catch (e) {
      // Silently catch SecurityError or QuotaExceededError
    }
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage?.removeItem(key);
      }
    } catch (e) {
      // Silently catch
    }
  }
};
