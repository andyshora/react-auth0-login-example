import React, { Component } from 'react'

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  componentDidMount() {
    const { renewSession } = this.props.auth

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession()
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        <div>
          <header>
            <div>
              <a href='#'>Auth0 - React</a>
            </div>
            <button onClick={this.goTo.bind(this, 'home')}>Home</button>
            {
              isAuthenticated()
                ? <button onClick={this.login.bind(this)}>Log In</button>
                : <button onClick={this.logout.bind(this)}>Log Out</button>
            }
          </header>
        </div>
      </div>
    )
  }
}

export default App
