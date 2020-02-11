import React from 'react'

type MyProps = {

}

type MyState = {
  count: number
}

class App6 extends React.Component<MyProps, MyState> {
  constructor () {
    super();
    this.state = {
      count : 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('I am working!!');
    this.setState((prevState): any => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render () {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        <button className="button is-info" onClick={this.handleClick}>
          Change!
        </button>
      </div>
    )
  }
}

export default App6