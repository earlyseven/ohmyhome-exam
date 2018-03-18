import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserList from '../components/UserList'
import queryString from 'query-string'
import { getUsersByFilter } from '../helpers'

const mapStateToProps = (state, props) => {
	const urlSearch = queryString.parse(props.location.search)
	return {
		users: getUsersByFilter(state.users, urlSearch.filter),
	}
}

export default withRouter(connect(
	mapStateToProps
)(UserList))