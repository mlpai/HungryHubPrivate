import { MMKV } from 'react-native-mmkv';

class Storage {
  private static storage = new MMKV();

  /**
   * Get all stored keys
   * @returns Promise
   */
  public static async getAll(): Promise<string[]> {
    return this.storage.getAllKeys();
  }

  public static getValue(key: string) {
    return this.storage.getBoolean(key);
  }

  public static setValue(key: string, value: string | boolean) {
    return this.storage.set(key, value?.toString());
  }

  public static clearAll() {
    return this.storage.clearAll();
  }
}

export default Storage;
