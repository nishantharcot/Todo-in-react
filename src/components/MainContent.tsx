import React from 'react'
import TodoItem from './TodoItem'
// Styling

const myStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
} as React.CSSProperties;
const buttonStyle = {
  width: '5vw'
} as React.CSSProperties;

// Scripting

const Name = 'Nishanth';
const date = new Date();
const hours = date.getHours()
let timeOfDay: String;

if (hours < 12) {
  timeOfDay = 'morning';
  myStyle.backgroundColor = 'green';
} else if (hours >= 12 && hours <= 17) {
  timeOfDay = 'afternoon';
  myStyle.backgroundColor = 'red';
} else {
  timeOfDay = 'night';
  myStyle.backgroundColor = 'orange';
}

const MainContent = (): any => (
  <section className="hero is-dark is-medium">
    <div style={myStyle} className="hero-body columns has-text-centered">
      <h1 className="is-size-2">
        Good {timeOfDay},  What's your favourite {Name}??
      </h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <div>
        <button style={buttonStyle} className="button is-danger" type="submit">
          Submit
        </button>
      </div>
    </div>
  </section>
)

export default MainContent