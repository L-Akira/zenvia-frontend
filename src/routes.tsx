import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Result, Withdraw } from './pages';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/withdraw" exact component={Withdraw} />
            <Route path="/withdraw/result" exact component={Result} />
        </BrowserRouter>
    )
}

export default Routes;