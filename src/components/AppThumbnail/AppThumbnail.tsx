import Card from 'react-bootstrap/Card';
import './thumbnail.scss';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

type Props = {
  appTitle: string;
  appDescription: string;
  appShortName: string;
  appImage: any;
}

const AppThumbnail = ({
  appTitle,
  appDescription,
  appShortName,
  appImage
}: Props) =>
{
  const { t } = useTranslation();

  return (
    <a
      href={`https://daholou.github.io/${appShortName}`}
      target={'_blank'}
      rel={'noreferrer'}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card
        className={'thumbnail-card'}
      >
        <Card.Img
          className={'thumbnail-card-img'}
          variant={'top'}
          src={appImage}
        />
        <Card.Header className={'thumbnail-card-header'}>
          <Card.Title className={'thumbnail-card-title'}>
            {appTitle}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className={'thumbnail-card-text'}>
            {appDescription}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant={'success'} className={'thumbnail-card-button'}>
            {t('APPS.GO')}
          </Button>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default AppThumbnail;
