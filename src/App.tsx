import React from 'react'
// import Joke from './components/Joke'
import Navbar from './components/Navbar'
// import jokesData from './components/jokesData' 
// import productsData from './components/productsData'
// import Product from './components/Product'
import todosData from './components/todosData'
import TodoItem from './components/TodoItem'

// Styling

const myStyle = {
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
} as React.CSSProperties

// TSX

// Array.filter does not allow you to transform the data into components

// const productsOverPrice10 = productsData.filter((product): any => (
//   <Product /> ? (product.price >= 10) : null
// )).map((product): any => (
//   <Product name={product.name} price={product.price} description={product.description} />
// ))

// console.log(productsOverPrice10)

type MyProps = {

}

type MyState = {
  todoItems?: Array<object>;
}

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      todoItems: todosData.map((todoItem): any => (
        <TodoItem key={todoItem.id} text={todoItem.text} completed={todoItem.completed} />
      ))
    }
  }

  render() {
    return (
      <body>
        <Navbar />
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div style={myStyle} className="container is-size-4">
              {this.state.todoItems}
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default App