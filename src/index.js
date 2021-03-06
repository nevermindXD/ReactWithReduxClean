import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
	<Root store={store}/>,
	document.getElementById('root')
)
//http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example