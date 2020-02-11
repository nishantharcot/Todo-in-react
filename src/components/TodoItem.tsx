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
      <input type="checkbox" id="idItem" checked={props.completed ? true : false} onChange={(): any => {console.log('change')}} />
      <p style={textStyle}>
        {props.text}
      </p>
    </label>
  )
}

export default TodoItem