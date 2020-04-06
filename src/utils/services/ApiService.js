const httpMethods = {
  GET: 'GET',
  POS: 'POST',
  PU: 'PUT',
  DELET: 'DELETE',
};

const defaultParams = {
  method: httpMethods.GET,
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
  },
  referrer: 'no-referrer', // no-referrer, *client
};

class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/`;
  }

  send(endpoint = '', params = {}) {
    const requestUrl = this.apiUrl + endpoint;
    const requestParams = Object.assign({}, defaultParams, params);

    return fetch(requestUrl, requestParams);
  }
}

export default ApiService;
