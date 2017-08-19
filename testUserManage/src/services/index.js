import request from '../utils/request';

export function getState() {
  return request('http://localhost:3000/users');
}

export function deleteUser(id){
  for (let i in id) {
    request(`http://localhost:3000/users/${id[i]}`, {
      method: 'DELETE',
    });
  }
}

export function search(select, input) {
  if (select === 'id'){
    return request(`http://localhost:3000/users/${input}`);
  }
  return request(`http://localhost:3000/users?${select}=${input}`);
}

export function add(user) {
  return request('http://localhost:3000/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

export function edit(user) {
  return request(`http://localhost:3000/users/${user.id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });
}

// /api/users