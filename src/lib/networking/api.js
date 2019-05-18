import 'whatwg-fetch';

export default class Api {
  static URL = process.env.NODE_ENV === 'production' ? 'http://68.183.223.50:3000/v1' : 'http://localhost:3000/v1';

  static OPTIONS = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  static async get(endpoint, headers = {}) {
    const options = { ...Api.OPTIONS };
    Object.keys(headers).forEach((key) => {
      options.headers[key] = headers[key];
    });

    const response = await window.fetch(Api.URL + endpoint, {
      ...options,
      method: 'get',
    });

    const json = await response.json();

    return json;
  }

  static async post(endpoint, body, headers = {}) {
    const options = { ...Api.OPTIONS };
    Object.keys(headers).forEach((key) => {
      options.headers[key] = headers[key];
    });

    const response = await window.fetch(Api.URL + endpoint, {
      ...options,
      method: 'post',
      body: JSON.stringify(body),
    });

    const json = await response.json();

    return json;
  }
}
