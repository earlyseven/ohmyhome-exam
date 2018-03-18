import fetch from 'cross-fetch'

// const userAPIUrl = 'http://localhost:8080/data/user.json';
const userAPIUrl = 'https://randomuser.me/api';

export const fetchUser = (onFetch) => {
	return dispatch => {
		return fetch(userAPIUrl)
			.then(response => response.json())
			.then(function(json) {
				onFetch(json.results[0])
			})
	}
}

let userIdIncrement = 0;
export const addUser = user => ({
	type: 'ADD_USER',
	id: userIdIncrement++,
	user: user
})

export const viewUser = id => ({
	type: 'VIEW_USER',
	id
})

export const deleteUser = id => ({
	type: 'DELETE_USER',
	id
})

export const restoreUser = id => ({
	type: 'RESTORE_USER',
	id
})