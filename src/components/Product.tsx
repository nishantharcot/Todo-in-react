import React from 'react'

const Product = (props: any): any => (
  <ol>
    <li>
      {props.name}
    </li>
    <li>
      {props.price}
    </li>
    <li>
      {props.description}
    </li>
  </ol>
)

export default Product