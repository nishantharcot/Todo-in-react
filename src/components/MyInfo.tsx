import React from 'react'

function MyInfo(): any {
  const myStyle = {
    color: "red"
  };
  return (
    <div>
      <h1>
        Nishanth Arcot
      </h1>
      <p style={myStyle}>
        I am learning React and doing projects
      </p>
      <ol>
        <li>Australia</li>
        <li>America</li>
        <li>Canada</li>
      </ol>
    </div>
  )
}

export default MyInfo