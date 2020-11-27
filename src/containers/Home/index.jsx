import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import './style.css';

function Home(props) {
  return (
    <div>
      <Layout>
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">Sidebar</Col>
            <Col md={10} style={{ marginLeft: 'auto' }}>Container</Col>
          </Row>
        </Container>
        {/* <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque minus asperiores enim quo, deserunt soluta hic vel illo sunt. A doloremque magni veniam nam at mollitia quidem dolor, voluptas quae beatae. Dolor accusantium asperiores tenetur suscipit, explicabo cupiditate debitis unde? Excepturi quisquam, nobis dolore earum consequuntur ea nesciunt sunt!</p>
        </Jumbotron> */}
      </Layout>
    </div>
  );
}

export default Home;
