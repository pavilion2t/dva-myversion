import request from '../utils/request';

export function sendAuthCode(values) {
  return request('api/sms', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

export function getRegister(values) {
  return request('api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
