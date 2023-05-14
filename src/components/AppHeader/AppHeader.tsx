import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';
import './app-header.css';

const AppHeader = () =>
{
  const itemHome = (
    <Navbar.Brand className={'app-header-item'}>
      {'Multi(×)Bloom'}
    </Navbar.Brand>);

  const itemLogo = (
    <Navbar.Brand className={'app-header-item'}>
      <Nav.Link
        className={'app-header-link'}
        href={'https://reactjs.org/'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        <img
          src={logo}
           className={'App-logo'}
           height={36}
           alt={'logo'}
        />
        {'Powered by ReactJS'}
      </Nav.Link>
    </Navbar.Brand>
  );

  return (
    <Navbar
      bg={'dark'}
      variant={'dark'}
      className={'app-header'}
      expand={'sm'}
    >
      {itemHome}
      {itemLogo}
    </Navbar>
  );
};

export default AppHeader;
