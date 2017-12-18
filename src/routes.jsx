import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'

import Header from './components/header'

import Home from './containers/home'
import Friends from './containers/friends/index'
import FriendNew from './containers/friends/new'
import FriendShow from './containers/friends/show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Routes = () => ( 
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/friends" component={Friends} />
                    <Route exact path="/friend/new" component={FriendNew} />
                    <Route exact path="/friend/:id" component={FriendShow} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

export default Routes;