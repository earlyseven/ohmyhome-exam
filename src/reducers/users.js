const users = (users = [], action) => {
	switch(action.type) {
		case 'ADD_USER':
			return [
				...users,
				{
					...action.user,
					id: action.id,
					deleted: false
				}
			]
		break
		case 'DELETE_USER':
		case 'RESTORE_USER':
			return users.map((user)=>{
				if(user.id === action.id) 
					return {...user, deleted: !user.deleted}
				return user
			})
		break
		break	
		default:
			return users
	}
}

export default users