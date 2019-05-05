const isDEV = process.env.NODE_ENV !== 'production';
const API_URL = isDEV ? '127.0.0.1:3000' : 'our-prod-url:port';

const postOptions = {
  method: 'post',
};

export const post = (endpoint, additionalOptions) => {
  const url = API_URL + endpoint;

  return fetch(url, Object.assign(postOptions, additionalOptions))
    .then(res => res.json());
};

export const get = endpoint => fetch(API_URL + endpoint).then(res => res.json());
