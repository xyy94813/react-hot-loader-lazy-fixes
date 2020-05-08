import React from 'react';
import SyncComponent from '../components/SyncComponent';

const routes = [
  {
    path: '/sync-component',
    component: SyncComponent,
  },
  {
    path: '/lazy-component',
    component: React.lazy(() => import(/* webpackChunkName: "LazyComponent" */'../components/LazyComponent')),
  },
];

export default routes;
