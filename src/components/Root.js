import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from '../route-config'

const Root = ({ store }) => (
    <Provider store={store} >
        <Router>
            <Switch>
                {routes}
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}


export default Root