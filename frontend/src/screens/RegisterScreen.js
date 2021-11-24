import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  let { loading, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, phoneNumber, address, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {loading && <Loader />}
      {message && <Message variant='danger'>{message}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className='py-2'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='py-2'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phone' className='py-2'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Enter Phone Number'
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='address' className='py-2'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Enter Address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='py-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword' className='py-2'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login` : '/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
