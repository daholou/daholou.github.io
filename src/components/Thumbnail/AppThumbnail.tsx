import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './thumbnail.css';

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
  return (
    <Card className={'thumbnail'}>
      <Card.Img
        variant={'top'}
        src={appImage}
      />
      <Card.Body>
        <Card.Title>
          {appTitle}
        </Card.Title>
        <Card.Text>
          {appDescription}
        </Card.Text>
        <Button
          variant={'primary'}
          href={`https://daholou.github.io/${appShortName}`}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'Go somewhere'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AppThumbnail;
