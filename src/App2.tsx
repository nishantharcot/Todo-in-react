import React from 'react'

type MyProps = {
  
}
type MyState = {
  answer: string;
}


class App2 extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      answer: 'Yes'
    }
  }
  render() {
    return (
      <div>
        <Header username="Mani Srinivas"/>
        <h1>
          Is it important to know State? {this.state.answer}
        </h1>
      </div>
    )
  }
}

class Header extends React.Component<{username: string}> {
  render () {
    return (
      <div>
        <p>
          Welcome, {this.props.username}
        </p>
      </div>
    )
  }
}

export default App2