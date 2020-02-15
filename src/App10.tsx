import React from 'react'

interface MyProps {

}

interface MyState {
  unReadMessages: Array<string>
}

class App10 extends React.Component<MyProps, MyState> {
  constructor() {
    super()
    this.state = {
      unReadMessages: ['a', 'b']
    }
  }
  render () {
    return (
      <div>
        {this.state.unReadMessages.length > 0 ?
          <h1> 
            You have {this.state.unReadMessages.length} unread messages.
          </h1> : null}
      </div>
    )
  }
}

export default App10