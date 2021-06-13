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
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    //e.preventDefault()
    dispatch(getUserToken())
    /* console.log(userName);
    try {
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
            <CardText
              className='mb-2'
              style={{
                fontFamily: 'Encode Sans, sans-serif',
                fontWeight: '400',
                fontSize: '16px',
              }}
            >
              Login now to schedule your priorities and improve your
              productivity at your workplace.
            </CardText>
            <Form className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='login-userName'>
                  Username
                </Label>
                <Input
                  autoFocus
                  type='text'
                  id='login-userName'
                  name='login-userName'
                  placeholder='Username'
                  value = {userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Password
                </Label>
                <Input
                  autoFocus
                  type='password'
                  id='login-email'
                  name='login-email'
                  value = {password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button tag = {Link} to='/sales' color='primary' block onClick={handleLogin} type='submit'>
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