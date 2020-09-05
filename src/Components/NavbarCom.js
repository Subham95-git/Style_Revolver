import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import BrandImage from '../Resorces/brand.jpg';
import MenShirt from '../Components/MenShirtComp';
import Home from '../Components/Home';
import MenTshirt from '../Components/MenTshirtComp';
import MenPant from '../Components/MenPant';
import MenOther from '../Components/MenOtherComp';


const NavbarComp = ()=>{
    return(
        <div>
        <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="/home">
      <img src={BrandImage} style={{width:"150px"},{height:"75px"}}></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown title="Men" id="basic-nav-dropdown">
        <NavDropdown.Item href="/men/shirt">Shirt</NavDropdown.Item>
        <NavDropdown.Item href="/men/tshirt">Tshirt</NavDropdown.Item>
        <NavDropdown.Item href="/men/pant">Pant</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/men/others">Others</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Women" id="basic-nav-dropdown">
        <NavDropdown.Item href="/women/sarees">Sarees</NavDropdown.Item>
        <NavDropdown.Item href="/women/kurtis">Kurtis</NavDropdown.Item>
        <NavDropdown.Item href="/women/materials">Suits &amp; Dress Materials</NavDropdown.Item>
        <NavDropdown.Item href="/women/western">Westernwear</NavDropdown.Item>
        <NavDropdown.Item href="/women/inner">Inner &amp; Sleepwear</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/women/others">Others</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/kids">Kids</Nav.Link>
      <Nav.Link href="/accessories">Accessories</Nav.Link>
      <Nav.Link href="/beauty">Beauty</Nav.Link>
      <Nav.Link href="/kitchen">Home &amp; kitchen</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/men/shirt" component={MenShirt}></Route>
    <Route exact path="/men/tshirt" component={MenTshirt}></Route>
    <Route exact path="/men/pant" component={MenPant}></Route>
    <Route exact path="/men/others" component={MenOther}></Route>
</Switch>
</div>
    );

}

export default NavbarComp;