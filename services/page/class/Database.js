import Dexie from 'dexie';

/**
 * Database wrapper class
 */
class Database {
  /**
   * Class constructor
   * @param name
   */
  constructor(name) {
    this.db = new Dexie('application');
    this.db.version(1).stores({
      pages: 'page, tree, expire',
    });
  }

  /**
   * Store database tree
   * @param page
   * @param tree
   * @returns {Promise<*>}
   */
  async store(page, tree) {
    const exists = await this.exists(page);
    const expire = new Date();
    expire.setSeconds(expire.getSeconds() + 600);

    return exists ?
      await this.db.pages.update(page, { tree, expire }) :
      await this.db.pages.add({
        page,
        tree,
        expire,
      });
  }

  /**
   * Get page
   * @param page
   * @returns {Promise<*>}
   */
  async get(page) {
    return await this.db.pages.get(page);
  }

  /**
   * Check if page exist
   * @param page
   * @returns {Promise<boolean>}
   */
  async exists(page) {
    const lookupPage = await this.get(page);

    return !!lookupPage;
  }


  /**
   * Check if page expired
   * @param page
   * @returns {Promise<boolean>}
   */
  async expired(page) {
    const lookupPage = await this.get(page);
    if (!lookupPage) {
      return true;
    }
    const now = new Date();

    return lookupPage.expire.getTime() > now.getTime();
  }
}

const database = new Database('application');

export default database;
