import React from 'react'
import Conditional from './components/Conditional'

interface MyProps {

}

interface MyState {
  isLoading: boolean
}


class App8 extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  // componentWillReceiveProps() {

  // }

  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App8