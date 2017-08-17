import request from '../utils/request';

export function getState() {
  return request('http://localhost:3000/users');
}

export function deleteUser(id){
  for (let i of id) {
    request(`http://localhost:3000/users/${id[i]}`, {
      method: 'DELETE',
    });
  }
}

export function search(select, input) {
  if (select === 'id'){
    return request(`http://localhost:3000/users/${input}`);
  } else {
    return request(`http://localhost:3000/users?${select}=${input}`);
  }

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