import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app-container.scss';
import { AppThumbnail } from '../AppThumbnail';
import { useTranslation } from 'react-i18next';
import {
  imageCovidTracker,
  imageGmailLogo,
  imageLinkedinLogo,
  imageMultiBloom
} from '../../images';
import Button from 'react-bootstrap/Button';

const EMAIL_URL = 'mailto:damien.aholou.pro@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/damienaholou/';

const AppContainer = () =>
{
  const { t } = useTranslation();

  return (
    <Container
      fluid={true}
      className={'app-container'}
    >
      <Col className={'app-col-container'}>
        <Row className={'app-row-container'}>
          <h1>
            {t('JOB.TITLE')}
          </h1>
          <div className={'app-paragraph'}>
            <span>{t('JOB.DESCRIPTION_1')}</span>
            <br/>
            <span>{t('JOB.DESCRIPTION_2')}</span>
            <br/>
            <span>{t('JOB.DESCRIPTION_3')}</span>
          </div>
        </Row>
        <Row className={'app-row-container'}>
          <h1>
            {t('PORTFOLIO.TITLE')}
          </h1>
          <div className={'app-paragraph'}>
            <span>{t('PORTFOLIO.DESCRIPTION_1')}</span>
            <br/>
            <span>{t('PORTFOLIO.DESCRIPTION_2')}</span>
          </div>
        </Row>
        <div className={'app-thumbnails-container'}>
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
        </div>
        <Row className={'app-row-container'}>
          <h1>
            {t('CONTACT.TITLE')}
          </h1>
          <div className={'app-paragraph'}>
            <span>{t('CONTACT.DESCRIPTION')}</span>
          </div>
          <div className={'app-contacts'}>
            <Button
              className={'app-contacts-button'}
              size={'lg'}
              variant={'outline-secondary'}
              as={'a'}
              href={EMAIL_URL}
            >
              <img
                src={imageGmailLogo}
                height={36}
                alt={'imageGmailLogo'}
              />
              <div>{t('CONTACT.EMAIL')}</div>
            </Button>
            <Button
              className={'app-contacts-button'}
              size={'lg'}
              variant={'outline-secondary'}
              as={'a'}
              href={LINKEDIN_URL}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <img
                src={imageLinkedinLogo}
                height={36}
                alt={'imageLinkedinLogo'}
              />
              <div>{t('CONTACT.LINKEDIN')}</div>
            </Button>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default AppContainer;
