import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Image,
  Form,
  FormControl
} from "react-bootstrap";
import "./index.css";

function App() {
  return (
    <div>
      
      <Jumbotron className='jumbo text-center'>
      <hr />
        <h1 style={{marginTop: '150px'}}>QVC Style Presentations Of Your Products!</h1>
          <p>Don't let Pedestrians just walk by your shop, engage them With Face To Face Sales!
        </p>
        <div style={{marginTop:'70px'}} >
          <Button variant="primary" style={{marginRight:'10px'}}>Turn Pedestrians Into Shoppers</Button>
          <Button variant="secondary" >Search Products</Button>


        </div>
        <img  src={require('./img/cover.png')} viewBox="0 0 100 100" width="450" height="300"/>

      </Jumbotron>
    </div>
  );
}

export default App;
