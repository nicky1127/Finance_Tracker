import axios from 'axios';

const baseURL = '/api';

class Api {
  constructor(config = null, httpClient = null, cacheClient = null) {
    const tempConfig = config || this.defaultConfig();
    this.config = tempConfig;
    this.baseURL = tempConfig.baseURL;

    this.http = httpClient;
    this.http = this.newHttp();
    this.uriRecords = '/records';
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

  async _post(url, data = {}) {
    try {
      const response = await this.http.post(url, data);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async recordList(params = {}) {
    const response = await this._get(this.uriRecords, params);
    let data = response && 'data' in response ? response.data : [];
    if (!Array.isArray(data)) {
      data = [data];
    }
    return data;
  }

  async recordCreate(data) {
    console.log('data in api : ', data);
    const response = await this._post(this.uriRecords, { data });
    let recordId = response && 'data' in response ? response.data : null;
    return recordId;
  }
}

const api = new Api();

export default api;
