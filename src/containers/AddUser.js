import React from 'react'
import { connect } from 'react-redux'
import { addUser, fetchUser } from '../actions'

const AddUser = ({ dispatch }) => (
	<button
		className="btn btn-danger btn-block"
		onClick={() => {
			dispatch(
				fetchUser(user => {
					dispatch(
						addUser(user)
					)
				})
			)
		}}
	>
		Add User
	</button>
)

export default connect()(AddUser)