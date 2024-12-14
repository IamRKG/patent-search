interface CacheItem<T> {
  data: T;
  timestamp: number;
}

const CACHE_DURATION = 3600; // 1 hour

export class Cache {
  private static cache = new Map<string, CacheItem<unknown>>();

  static set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  static get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > CACHE_DURATION * 1000) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data as T;
  }
}
