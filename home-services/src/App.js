
import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card2 from './Cards_UI/Card2.js';
import Card1 from './Cards_UI/Card1.js';
import Card3 from './Cards_UI/Card3.js';
import Card4 from './Cards_UI/Card4.js';
import Card5 from './Cards_UI/Card5.js';
import Card6 from './Cards_UI/Card6.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App=()=> {
  return (
    <>
    <div className="App">
      <div className="container" >
        <Row>
          <Col>
          <Card1 />
          <Card2 />
          </Col>
        </Row>
        <Row>
          <Col>
          <Card3 />
          <Card4 />
          </Col>
        </Row>
        <Row>
          <Col>
          <Card5 />
          <Card6 />
          </Col>
        </Row>

      </div>
    </div>
    </>
  );
}

export default App;
