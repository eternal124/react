import request from '../utils/request';

export function getState() {
  return request('http://localhost:3000/users');
}

export function deleteUser(id){
  return request(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
  });
}

export function search(id) {
  return request(`http://localhost:3000/users/${id}`);
}

export function add(user) {
  return request('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(user),
  });
}

export function edit(user) {
  return request(`http://localhost:3000/users/${user.id}`, {
    method: 'PATCH',
    body: JSON.stringify(user),
  });
}

// /api/users