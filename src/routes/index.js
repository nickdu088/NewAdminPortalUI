import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import authService from '../components/api-authorization/AuthorizeService'

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
        authService.isAuthenticated().then(
            result=>result ? <PrivateSection/ >:<PublicRoutes />
        )
    }, [pathname]);

    let isUserLoggedIn = false;

    const awaiting = authService.isAuthenticated() //This is a promise
        awaiting.then((value) => {
        //do stuff with your value,
        isUserLoggedIn = true;
        })

    console.log("32322432"+isUserLoggedIn);
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
