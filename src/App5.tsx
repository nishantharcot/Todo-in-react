import React from 'react'

const handleClick = (): void => {
  console.log("I was Clicked");
}

const handleMouseOver = (): void => {
  console.log("On the Image");
}

type MyProps = {

}

type MyState = {

}

class App5 extends React.Component<MyProps, MyState> {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <img onMouseOver={handleMouseOver} src="https://www.fillmurray.com/200/300" alt=""/>
        <br/>
        <br/>

        <button className="button is-danger" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default App5