import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware
	)
);

const Root = ({store}) => (
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</Provider>
)

render(
	<Root store={store}/>,
	document.getElementById('root')
);
