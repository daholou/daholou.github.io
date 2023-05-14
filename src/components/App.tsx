import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css';
import { AppHeader } from './AppHeader';
import { AppContainer } from './AppContainer';
import { useTranslation } from 'react-i18next';

const App = () =>
{
  const { t } = useTranslation();
  return (
    <Suspense fallback={'loading...'}>
      <div className={'App'}>
        <AppHeader />
        <AppContainer />
        <h1>{t('main.HEADER')}</h1>
      </div>
    </Suspense>
  );
};

export default App;
