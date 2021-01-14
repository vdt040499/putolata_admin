import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";

function Home(props) {
  return (
    <div>
      <Layout sidebar>
        <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
          <h1>PUTOLATA</h1>
          <h1>ADMIN DASHBOARD</h1>
        </Jumbotron>
      </Layout>
    </div>
  );
}

export default Home;
