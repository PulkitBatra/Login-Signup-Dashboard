import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ProfileScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Row>
      <Col>
        <h2>User Profile</h2>
        <p>
          <div>Name : {userInfo.name}</div>
          <div>Email Address : {userInfo.email}</div>
          <div> Phone Number : {userInfo.phoneNumber}</div>
          <div>Address : {userInfo.address}</div>
        </p>
      </Col>
    </Row>
  )
}

export default ProfileScreen
