import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteUser, restoreUser } from '../actions'
import UserProfile from '../components/UserProfile'
import { getUserById } from '../helpers'

const mapStateToProps = (state, props) => ({
	user: getUserById(state.users, parseInt(props.match.params.id)),
})

const mapDispatchToProps = (dispatch) => ({
	deleteUser: id => dispatch(deleteUser(id)),
	restoreUser: id => dispatch(restoreUser(id))
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfile))