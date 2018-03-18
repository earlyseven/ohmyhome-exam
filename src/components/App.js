import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from '../components/Filters'
import AddUser from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList'
import VisibleUser from '../containers/VisibleUser'

import '../styles/app.scss'

const App = () => {
	return (
		<div className="container pt-3 pb-3">
			<div className="row">
				<div className="col-md-12">
					<h3 className="text-center pb-3">User Profile App</h3>
					<hr />	
				</div>
				<div className="col-md-4">
					<AddUser />
					<br />
					<Filters />
				</div>
				<div className="col-md-8">
					<Switch>
						<Route 
							path="/users/:id"
							component={(props) => (
								<VisibleUser
									{...props}
								/>
							)}
						/>
						<Route 
							exact
							path="/users/:filter?"
							component={(props) => (
								<VisibleUserList
									{...props}
								/>
							)}
						/>
						<Redirect
							to={{
								pathname: "/users",
								search: "?filter=SHOW_ACTIVE"
							}}
						/>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App