import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { generateUserFullName } from '../helpers'

const UserProfile = ({ user, deleteUser, restoreUser }) => {
	let actionButton = <button 
							className="btn btn-md btn-primary"
							onClick={() => restoreUser(user.id)}
						>
							RESTORE
						</button>

	if(!user.deleted) {
		actionButton = <button 
							className="btn btn-md btn-danger"
							onClick={() => deleteUser(user.id)}
						>
							DELETE USER
						</button>
	}

	const fullName = generateUserFullName(user.name)

	let cardProps = {
		img: {
			src: user.picture.large,
			alt: user.picture.large
		},
		title: fullName,
		text: user.email,
		buttons: actionButton
	}

	return (
		<div className="row">
			<div className="col-md-8 offset-md-2">
				<Card 
					{...cardProps}
				/>
				<Link 
					className="btn btn-md btn-light float-right"
					to={{
						pathname: '/users',
						search: '?filter=SHOW_ACTIVE'
					}}
				>
					GOBACK
				</Link>
			</div>
		</div>
	)
}

export default UserProfile