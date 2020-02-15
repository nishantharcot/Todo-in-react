import React from 'react'
import ConditionWithoutProps from './components/ConditionWithoutProps'


interface MyProps {

}

interface MyState {
  isLoading: boolean
}


class App9 extends React.Component<MyProps, MyState> {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1>: <ConditionWithoutProps />}
      </div>
    )
  }
}

export default App9