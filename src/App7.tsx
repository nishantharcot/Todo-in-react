import React from 'react'
import Navbar from './components/Navbar'

type MyProps = {

}

type MyState = {
  count: number
}


class App7 extends React.Component<MyProps, MyState> {
  constructor () {
    super()
    this.state = {
      count: 1
    }
    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.double = this.double.bind(this);
  }
  addOne () {
    this.setState((prevState): any => {
      return {
        count: prevState.count + 1
      }
    })
  }
  subtractOne () {
    this.setState((prevState): any => {
      return {
        count: prevState.count - 1
      }
    })
  }

  double () {
    this.setState((prevState): any => {
      return {
        count: prevState.count * 2
      }
    })
  }
  render () {
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <h1>
              {this.state.count}
            </h1>
            <button className="button" onClick={this.addOne}>
              Add 1
            </button>
            <button className="button" onClick={this.subtractOne}>
              Subtact 1
            </button>
            <button className="button" onClick={this.double}>
              Double
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default App7