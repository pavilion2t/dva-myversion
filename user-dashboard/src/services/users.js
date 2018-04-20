import request from '../utils/request';

export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=3`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}
