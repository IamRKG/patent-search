const CACHE_DURATION = 3600; // 1 hour

export class Cache {
  private static cache = new Map<string, { data: any; timestamp: number }>();

  static set(key: string, data: any) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  static get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > CACHE_DURATION * 1000) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
}
