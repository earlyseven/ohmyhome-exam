import React from 'react'
import User from './User'

const NoUsers = () => (
	<p className="text-center">No Users</p>
)

const UserList = ({ users, match }) => {
	if(!users.length) {
		return <NoUsers />
	}
	return (
		<ul className="list-group">
			{users.map((user, index) => (
				<User
					key={index}
					user={user}
				></User>
			))}
		</ul>
	)
}

export default UserList