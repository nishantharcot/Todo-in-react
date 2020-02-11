import React from 'react'

type MyProps = {

}

type MyState = {
  name: string;
  age: number;
  married?: boolean;
}

class App3 extends React.Component<MyProps, MyState> {
  constructor () {
    super();
    this.state = {
      name: 'Nishanth Arcot',
      age: 20
    }
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
        <h2>
          {this.state.age} years old
        </h2>
      </div>
    )
  }
}

export default App3