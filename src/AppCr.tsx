import React from 'react'

interface MyProps {

}

interface MyState {
  userLoggedIn: boolean
}

class AppCr extends React.Component<MyProps, MyState> {
  constructor () {
    super();
    this.state = {
      userLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState((prevState) => {
      return {
        userLoggedIn: !prevState.userLoggedIn
      }
    }) 
  }
  render () {
    return (
      <div>
        <h1>
          User is logged {this.state.userLoggedIn ? <strong>In</strong>: <strong>Out</strong>}
        </h1>
        <button className="button is-info" onClick={this.handleClick}>
          Log &nbsp; {this.state.userLoggedIn ? <strong>Out</strong>: <strong>In</strong>}
        </button>
      </div>
    )
  }
}

export default AppCr