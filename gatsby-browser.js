// custom typefaces
import React from 'react';

import 'typeface-montserrat';
import 'typeface-merriweather';

export const onClientEntry = () => {
    console.log("We've started!");
};

export const onInitialClientRender = () => {
    console.log('ReactDOM.render has executed');
};

export const onPrefetchPathname = ({ pathname }) => {
    console.log(`Prefetch for ${pathname}`);
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
    console.log('Gatsby started to change location to', location.pathname);
    console.log('Gatsby started to change location from', prevLocation ? prevLocation.pathname : null);
};

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm('This application has been updated. ' + 'Reload to display the latest version?');

    if (answer) {
        window.location.reload();
    }
};

export const wrapPageElement = ({ element }) => <div className="page-layout">{element}</div>;

export const wrapRootElement = ({ element }) => <div className="gatsby-browser-root">{element}</div>;
