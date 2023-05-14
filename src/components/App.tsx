import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css';
import { AppHeader } from './AppHeader';
import { AppContainer } from './AppContainer';

const App = () =>
{
  return (
    <Suspense fallback={'loading...'}>
      <div className={'App'}>
        <AppHeader />
        <AppContainer />
      </div>
    </Suspense>
  );
};

export default App;
