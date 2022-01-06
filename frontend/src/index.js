import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Maps from './components/Map'
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col,Container } from 'react-bootstrap';




ReactDOM.render(
  <React.StrictMode>
   {/* <Container>
  <Row>
    <Col ><NavBar/></Col>
    <Col sm={12}><App /></Col>
  </Row>
  </Container> */}

  <NavBar/>
  <Maps/>
  

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
