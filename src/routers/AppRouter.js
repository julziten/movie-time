import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { Details } from '../components/Details';
import { MovieTime } from '../components/MovieTime';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Favorites } from '../components/Favorites';

export const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/details/:id" component={ Details } />
                        <Route path="/favorites" component={ Favorites } />
                        <Route exact path="/" component={ MovieTime } />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}
