import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../services/auth';
import { getUserToken } from '../../redux/actions/Sales';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

const Login = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const [apiKey, setApiKey] = useState('');
  const [siteId, setSiteId] = useState('');
  const [appName, setAppName] = useState('')
  const handleLogin = async (e) => {
    //e.preventDefault()
    dispatch(getUserToken())
    console.log(apiKey);
    /*try {
      const login = await loginUser(userName, password);
      if (login.data) {
        router.push('/sales');
      }
    } catch (error) {
      console.log(error);
    } */
  };
  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Col
          className='d-flex align-items-center auth-bg px-2 p-lg-5'
          lg='4'
          sm='12'
        >
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle
              tag='h2'
              className='mb-1'
              style={{
                fontFamily: 'Encode Sans, sans-serif',
                fontWeight: '600',
              }}
            >
              WELCOME TO RYZEN! 👋
            </CardTitle>
            <Form className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='login-userName'>
                  API KEY
                </Label>
                <Input
                  autoFocus
                  type='name'
                  id='login-userName'
                  name='login-userName'
                  value = {apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  SITE ID
                </Label>
                <Input
                  type='name'
                  id='login-email'
                  name='login-email'
                  value = {siteId}
                  onChange={(e) => setSiteId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  APP NAME
                </Label>
                <Input
                  type='name'
                  id='login-email'
                  name='login-email'
                  value = {appName}
                  onChange={(e) => setAppName(e.target.value)}
                />
              </FormGroup>
              <Button tag = {Link} to = '/sales' color='primary' block onClick={e => handleLogin(e)}>
                Sign In
              </Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;