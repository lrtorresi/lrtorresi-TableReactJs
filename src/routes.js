import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientList from './pages/ClientList';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ClientList} />
            </Switch>
        </BrowserRouter>
    );
}
