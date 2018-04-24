import request from '../utils/request';

export function login(values) {
  return request('api/auth', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
