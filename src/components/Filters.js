import React from 'react'
import { connect } from 'react-redux'
import FilterLink from '../containers/FilterLink'
import { getUsersByFilter } from '../helpers'

const filterLinkClassName = "list-group-item d-flex justify-content-between align-items-center"
const badgeClassName = "badge badge-danger badge-pill"
const filterLinks = [
	{text: 'All', filter: 'all'},
	{text: 'Active', filter: 'active'},
	{text: 'Deleted', filter: 'deleted'},
]

const Filters = ({ users }) =>  (
	<ul className="list-group">
		{filterLinks.map((filterLink, index)=>(
			<FilterLink
				key={index}
				className={filterLinkClassName}
				filter={filterLink.filter}
			>
				{filterLink.text}
				<span className={badgeClassName}>{getUsersByFilter(users, filterLink.filter).length}</span>
			</FilterLink>
		))}
	</ul>
)

const mapStateToProps = (state, props) => ({
	users: state.users
})

export default connect(mapStateToProps)(Filters)

