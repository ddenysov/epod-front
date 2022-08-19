import database from '~/services/page/class/Database';
import axios from 'axios';
import Vue from 'vue';

/**
 * Page class
 */
class Page {
  /**
   * Constructor
   */
  constructor (pageName) {
    this.pageName = pageName;
    this.database = database;
    this.page = {};
  }

  /**
   * Init
   * @returns {Promise<void>}
   */
  async init() {
    const result = await this.fetch(this.pageName);

    return await this.getPage();
  }

  /**
   * Fetch page
   * @param page
   * @returns {Promise<void>}
   */
  async fetch (page) {
    if (!this.isClient()) {
      return;
    }

    const expired = await this.database.expired(page);

    if (expired) {
      const response = await this.load(page);
      await this.database.store(page, response.data)
    }
  }

  /**
   * Load data
   * @param page
   * @returns {Promise<AxiosResponse<any>>}
   */
  async load (page) {
    if (!this.isClient()) {
      return await axios.get('http://localhost:2000/api/' + page)
    }

    return await axios.get('/api/' + page);
  }

  /**
   * Get page
   * @param page
   */
  async get (page) {
    if (!this.isClient()) {
      const res = await  this.load(page);

      return {
        tree: res.data,
        page: page,
      };
    }
    await this.fetch(page);

    return await this.database.get(page);
  }

  /**
   * Check if run from client
   * @returns {boolean}
   */
  isClient () {
    return typeof window !== 'undefined';
  }

  /**
   * Get page
   * @returns {Promise<{tree: *}|*>}
   */
  async getPage () {
    return await this.get(this.pageName);
  }
}

export default Page;
