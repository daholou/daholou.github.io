import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './app-container.css';
import { AppThumbnail } from '../AppThumbnail';
import { useTranslation } from 'react-i18next';
import { imageCovidTracker, imageMultiBloom } from '../../images';

const AppContainer = () =>
{
  const { t } = useTranslation();

  return (
    <Container
      fluid={true}
      className={'app-container'}
    >
      <Row>
        <h1>{t('APP.INTRO')}</h1>
      </Row>
      <Row className={'app-thumbnails-container'}>
        <AppThumbnail
          appTitle={t('APPS.MULTI_BLOOM.TITLE')}
          appDescription={t('APPS.MULTI_BLOOM.DESCRIPTION')}
          appShortName={t('APPS.MULTI_BLOOM.SHORT_NAME')}
          appImage={imageMultiBloom}
        />
        <AppThumbnail
          appTitle={t('APPS.COVID_TRACKER.TITLE')}
          appDescription={t('APPS.COVID_TRACKER.DESCRIPTION')}
          appShortName={t('APPS.COVID_TRACKER.SHORT_NAME')}
          appImage={imageCovidTracker}
        />
      </Row>
    </Container>
  );
};

export default AppContainer;
