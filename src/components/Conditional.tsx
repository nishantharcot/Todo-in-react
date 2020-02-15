import React from 'react'

function Conditional (props: any) {
  console.log(props.isLoading);
  if (props.isLoading === true) {
    return (
      <h1>
        Loding...
      </h1>
    )
  } else {
    return (
      <h1>
        Loaded, Cond Rendering is Cool!!!
      </h1>
    )
  }
}

export default Conditional