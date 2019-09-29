import axios from 'axios';

const baseURL = '/api';

class Api {
  constructor(config = null, httpClient = null, cacheClient = null) {
    const tempConfig = config || this.defaultConfig();
    this.config = tempConfig;
    this.baseURL = tempConfig.baseURL;

    this.http = httpClient;
    this.http = this.newHttp();
  }

  defaultConfig() {
    return {
      baseURL
    };
  }

  newHttp() {
    const http = this.http || axios.create(this.config);
    return http;
  }

  async _get(url, params = {}) {
    try {
      const response = await this.http.get(url, { params });
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async recordList(params = {}) {
    const uriRecords = '/records';
    const response = await this._get(uriRecords, params);
    let data = response && 'data' in response ? response.data : [];
    if (!Array.isArray(data)) {
      data = [data];
    }
    return data;
  }
}

const api = new Api();

export default api;
