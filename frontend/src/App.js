import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import PrivateRoute from './routing/PrivateRoute'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <PrivateRoute path='/' component={HomeScreen} exact />
          <PrivateRoute path='/profile' component={ProfileScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
