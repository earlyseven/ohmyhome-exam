/**
* Helpers/Utilities 
*/

/**
* Make strings' first letter uppercase
*/
export const ucfirst = str => str.slice(0, 1).toUpperCase().concat(str.slice(1))

/**
* Generate user's full name based on the name elements
* from the API
*/
export const generateUserFullName = (nameElems) => {
	return [
		nameElems.first,
		nameElems.last
	]
	.map(name => ucfirst(name))
	.join(" ")
}

/**
* Compute new list of users based on filter
*/
export const getUsersByFilter = (users = [], filter = 'all') => {
	switch(filter) {
		case 'active':
			return users.filter(user => !user.deleted)
		break;
		case 'deleted':
			return users.filter(user => user.deleted)
		break;
		case 'all':
		default:
			return users
	}
}

/**
* Get user from list of users based on `id` property
*/
export const getUserById = (users = [], id) => {
	return users.filter(user => user.id == id)[0]
}