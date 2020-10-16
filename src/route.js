import React from 'react';

const Connexion = React.lazy(() => import('./Demo/Authentication/Connexion/Connexion'));

const route = [
    { path: '/connexion', exact: true, name: 'Connexion', component: Connexion },
];

export default route;