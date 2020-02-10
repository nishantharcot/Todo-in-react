import React, {Component} from 'react'

class App1 extends React.Component {
  render() {
    return (
      <div>
        <Header username="Nishanth Arcot" />
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component<{username: string}> {
  render() {
    return (
      <header>
        <p>
          Welcome, {this.props.username}
        </p>
      </header>
    )
  }
}

class Greeting extends React.Component {

  currentHour() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay: String
    if (hours > 4 && hours < 11){
      timeOfDay = 'morning'
    } else if(hours > 11 && hours < 16) {
      timeOfDay = 'afternoon'
    } else if(hours > 16 && hours < 20) {
      timeOfDay = 'evening'
    } else {
      timeOfDay = 'night'
    }
    return timeOfDay
  }
  render() {
    const Time = this.currentHour();
    return (
      <div>
        Good, {Time} to you Sir
      </div>
    )
  }
}

export default App1;