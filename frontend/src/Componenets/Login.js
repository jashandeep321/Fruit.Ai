import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'; // We'll add custom styles here
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import pinterest from '../assests/pinterest.png';
import linkedin from '../assests/linkedin.png';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';



function Login() {
  const [key, setKey] = useState('home');

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center login-row">
        <Col xs={12} sm={10} md={10} lg={10} className="login-col">
          <h2 className='mb-4'>Login</h2>
          <p>By signing in you are agreeing to our Terms and Privacy Policy</p>
          <div id='login-tab'>
            <Tabs
              id="tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 justify-content-center mt-5"
            >
              <Tab eventKey="home" title="Login">
                <Form>
                  <Form.Group as={Row} className="mb-4 mt-3" controlId="formPlaintextEmail">
                    <Col sm="12">
                      <Form.Control type="text" placeholder="Email" className="underline-input" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                    <Col sm="12">
                      <Form.Control type="password" placeholder="Password" className="underline-input" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-5 text-align-start" controlId="formBasicCheckbox">
                    <Col sm="12" className="d-flex justify-content-between">
                      <Form.Check type="checkbox" label="Remember Password" style={{ color: '#D4C5C5', textAlign: 'start' }} />
                      <Form.Text className="text-muted">
                        <a href="#">Forgot Password?</a>
                      </Form.Text>
                    </Col>
                  </Form.Group>

                  {/* <Form.Group as={Row} className="mb-4"> */}
                  {/* <Col sm="12" className="d-flex justify-content-between">
                    
                  </Col>
                </Form.Group> */}

                  {/* Login Button */}
                  <Form.Group as={Row} className="">
                    <Col sm="12" className="text-center">
                    <Link to="/home">
                      <Button variant="primary" type="submit" className="px-5">Login</Button>
                    </Link>
                    </Col>
                  </Form.Group>
                  <p style={{ color:'#747070'}}>or connect with</p>
                  <Col sm="12" className="d-flex justify-content-center">
                  <img className='me-3' src={facebook}/>
                  <img className='me-3' src={instagram}/>
                  <img className='me-3' src={pinterest}/>
                  <img src={linkedin}/>
                  </Col>
                </Form>
              </Tab>



              <Tab eventKey="profile" title="Register">
                Tab content for Register
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
