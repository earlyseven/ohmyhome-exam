import React from 'react'
import { NavLink } from 'react-router-dom'
import { generateUserFullName } from '../helpers'
import Card from './Card'

const User = ({ user }) => {
	return (
		<NavLink
			className="list-group-item"
			to={`/users/${user.id}`}
		>
			{generateUserFullName(user.name)}
		</NavLink>
	)
}

export default User