import React from 'react'

const myStyle = {
  display: 'flex',
  flexDirection: 'row',
} as React.CSSProperties

const textStyle = {
  position: 'relative',
  bottom: '2vh',
  left: '2vw',
  color: 'red',
} as React.CSSProperties

const TodoItem = (props: any): any => {
  return (
    <label style={myStyle} className="checkbox">
      <input type="checkbox" id={props.id} checked={props.completed} onChange={() => (props.handleChange(props.id))} />
      <p style={textStyle}>
        {props.text}
      </p>
    </label>
  )
}



export default TodoItem