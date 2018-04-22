import request from '../utils/request';

export function sendAuthCode(values) {
  return request('/sms',{
    method: 'POST',
    body: JSON.stringify(values),
  });
}
