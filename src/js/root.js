import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

function renderRoutes () {
    return (
        <ReduxRouter>
            <Route component={Application}>
                <Route path="/" component={Home} />
                <Route path="/users" component={Account} onEnter={requireAuth}>
                    <Route path="profile" component={AccountHome} />
                    <Route path="secret-area" component={SuperSecretArea} />
                </Route>
            </Route>
        </ReduxRouter>
    )
}

function requireAuth (nextState, replaceState) {
    const state = store.getState()
    const isLoggedIn = Boolean(state.application.token)
    if (!isLoggedIn)
        replaceState({
            nextPathname: nextState.location.pathname
        }, '/login')
}

function logout (nextState, replaceState) {
    store.dispatch({ type: constants.LOG_OUT })
    replaceState({}, '/login')
}

class Root extends React.Component {
    static propTypes = {
        application: PropTypes.object.isRequired
    };

    render () {
        return (
            <div>{getRootChildren(this.props)}</div>
        )
    }
}

export default connect(({ application }) => ({ application }))(Root)