type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'PATCH';

const getAuthToken = localStorage.getItem('authToken');

const bearerToken = {
  headers: {
    Authorization: `Bearer ${getAuthToken}`,
  },
};

export const prepareQueryOptions = (
  method: HttpMethod,
  body: any
): RequestInit => {
  const options = { method, ...bearerToken };
  if (body) {
    return {
      ...options,
      body: JSON.stringify(body),
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    };
  }
  return options;
};
