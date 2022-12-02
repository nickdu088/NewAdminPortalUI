import React from 'react';
import { Redirect, Route, Switch, Navigate } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import ApiAuthorizationRoutes from '../components/api-authorization/ApiAuthorizationRoutes';
import AuthorizeRoute from 'components/api-authorization/AuthorizeRoute';
import Routes from 'routes';

function PublicRoutes() {
    return (
        <Switch>
            <Routes>
            {
                ApiAuthorizationRoutes.map((route, index) => {
                    const { path, element } = route;
                    console.log(path);
                    return <Route key={index} element = {<AuthorizeRoute path={path} element={element} />} />
                })
            }
            </Routes>
        </Switch>
    );
}

export default PublicRoutes;
