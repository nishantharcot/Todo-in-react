import React from 'react'

interface MyProps {
  id: number,
  text: string,
  completed: boolean,
  handleChange: (id: number) => void
}

interface MyState {
  pColor: string,
  textDisplay: string,
}

class TodoItem extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      pColor: 'red',
      textDisplay: 'none',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    console.log('Mounted')
  }

  handleChange(currentState: boolean): any {
    if (currentState === false) {
      this.setState({ pColor: 'green', textDisplay: 'line-through'})
    } else {
      this.setState({ pColor: 'red', textDisplay: 'none'})
    }
  }
  render() {
    const styles = {
      textStyle : {
        position: 'relative',
        bottom: '3.5vh',
        left: '2vw',
        color: this.state.pColor,
        textDecoration: this.state.textDisplay,
      } as React.CSSProperties,
      myStyle : {
        display: 'flex',
        flexDirection: 'column',
      } as React.CSSProperties
    }
    return (
      <label style={styles.myStyle} className="checkbox">
        <input
          type="checkbox"
          key={this.props.id}
          checked={this.props.completed}
          onClick={() => this.handleChange(this.props.completed)}
          onChange={() => (this.props.handleChange(this.props.id))}
        />
        <p style={styles.textStyle}>
          {this.props.text}
        </p>
      </label>
    )
  }
}

export default TodoItem