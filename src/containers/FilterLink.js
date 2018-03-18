import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({ children, className, filter }) => {
	return (
		<Link 
			className={className}
			to={{
				pathname: '/users',
				search: `?filter=${filter}`
			}}
		>
			{children}
		</Link>
	)
}

export default FilterLink