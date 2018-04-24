import request from '../utils/request';

export function sendAuthCode(values) {
  return request('register',{
    method: 'POST',
    body: JSON.stringify(values),
  });
}
