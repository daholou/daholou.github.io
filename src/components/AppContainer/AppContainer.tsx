import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './app-container.css';
import { Thumbnail } from '../Thumbnail';

const AppContainer = () =>
{
  return (
    <Container
      fluid={true}
      className={'app-container'}
    >
      <Row className={'app-thumbnails-container'}>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />

        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Row>
    </Container>
  );
};

export default AppContainer;
