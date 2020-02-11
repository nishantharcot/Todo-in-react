import React from 'react'

type MyProps = {

}

type MyState = {
  isLoggedIn: boolean
}

class App4 extends React.Component<MyProps, MyState> {
  constructor () {
    super();
    this.state = {
      isLoggedIn: false,
    }
  }
  render () {
    return (
      <div>
        <h1>
          You are currently logged {this.state.isLoggedIn? 'in' : 'out'}
        </h1>
      </div>
    )
  }
}

export default App4