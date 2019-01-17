import React from 'react'

const Home = ({ auth }) => (
  <div>
    {
      auth.isAuthenticated
        ? <h4>You are logged in!</h4>
        : <h4>You are not logged in! Please <a onClick={auth.login}>Log In</a> to continue.</h4>
    }
  </div>
)

export default Home
