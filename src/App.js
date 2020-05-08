import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './common/routes';

setConfig({
  trackTailUpdates: false,
})

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sync-component">sync-componet</Link>
            </li>
            <li>
              <Link to="/lazy-component">lazy-component</Link>
            </li>
          </ul>
        </nav>
        <React.Suspense
          fallback={<div style={{ margin: 'auto' }}>loading....</div>}
        >
          {renderRoutes(routes)}
        </React.Suspense>
      </div>
    </Router>
  );
}

export default hot(React.memo(App));
