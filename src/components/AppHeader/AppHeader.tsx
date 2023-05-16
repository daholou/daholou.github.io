import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  imageFlagFrance,
  imageFlagUsa,
  imageGithubLogo,
  imageReactLogo
} from '../../images';
import './app-header.css';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';

const AppHeader = () =>
{
  const { t } = useTranslation();

  return (
    <Navbar
      bg={'dark'}
      variant={'dark'}
      className={'app-header'}
      expand={'sm'}
      collapseOnSelect={true}
    >
      <Container fluid>
        <Navbar.Brand as={'div'} className={'app-header-item'}>

        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls={'responsive-navbar-nav'} />
        <Navbar.Collapse id={'responsive-navbar-nav'}>
          <Nav className={'me-auto'}>
            <Nav.Link>
              coucou
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={t('APP.HEADER.LANGUAGES.TITLE')}
              id={'collasible-nav-dropdown'}
            >
              <NavDropdown.Item onClick={console.log}>
                <div className={'app-dropdown-item'}>
                  <img
                    src={imageFlagFrance}
                    height={24}
                    alt={'FR'}
                  />
                  {t('APP.HEADER.LANGUAGES.FRENCH')}
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={console.log}>
                <div className={'app-dropdown-item'}>
                  <img
                    src={imageFlagUsa}
                    height={24}
                    alt={'EN'}
                  />
                  {t('APP.HEADER.LANGUAGES.ENGLISH')}
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {`v${process.env.REACT_APP_VERSION}`}
            </Nav.Link>
            <Nav.Link
              className={'app-header-link'}
              href={'https://reactjs.org/'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <img
                src={imageReactLogo}
                className={'App-logo'}
                height={36}
                alt={'react-logo'}
              />
            </Nav.Link>
            <Nav.Link
              className={'app-header-link'}
              href={'https://github.com/daholou/daholou.github.io'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <img
                src={imageGithubLogo}
                height={36}
                alt={'github-logo'}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
