import React from 'react'

type MyProps = {
  
}
type MyState = {
  answer: string;
  value: number;
  username: string;
}

class App2 extends React.Component<MyProps, MyState> {
  constructor() {
    // super(is a Global function) gets some important features of React.Component
    super();
    this.state = {
      answer: 'Yes',
      value: 4,
      username: 'Mani Srinivas'
    }
  }
  render() {
    return (
      <div>
        <Header username={this.state.username}/>
        <h1>
          Is it important to know State?  {this.state.answer}
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