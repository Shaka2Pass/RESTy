const BODY_METHODS = ['POST', 'PUT', 'PATCH'];

export const makeRequest = (url, method = 'GET', body) => {
  return fetch(url, { 
    method, 
    body: BODY_METHODS.includes(method) ? body : null,  
    headers: {
      'Content-Type': BODY_METHODS.include(method) ? 'application/json' : null
    }
  })
    .then(res => res.json());
};

