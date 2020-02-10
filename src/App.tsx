import React from 'react'
import Joke from './components/Joke'
import Navbar from './components/Navbar'
import jokesData from './components/jokesData' 
import productsData from './components/productsData'
import Product from './components/Product'
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

// const jokeWithBottomAndToptexts = jokesData.filter((joke): any => (
//   <Joke /> ? (joke.topText !== undefined && joke.bottomText !== undefined) : null 
// )).map((joke): any => (
//   <Joke key={joke.id} topText={joke.topText} bottomText={joke.bottomText} />
// ))

const productsOverPrice10 = productsData.filter((product): any => (
  <Product /> ? (product.price >= 10) : null
)).map((product): any => (
  <Product name={product.name} price={product.price} description={product.description} />
))

const todoItems = todosData.map((todoItem): any => (
  <TodoItem key={todoItem.id} text={todoItem.text} />
))
console.log(todoItems)
console.log(productsOverPrice10)

// const App = (): any => (
//   <body>
//     <Navbar />
//     <section className="hero is-dark is-medium">
//       <div className="hero-body">
//         <div style={myStyle} className="container is-size-4">
//           {todoItems}
//         </div>
//       </div>
//     </section>
//   </body>
// )

class App extends React.Component {

  yourMethod() {
    return 3
  }

  render() {
    const date = this.yourMethod();
    console.log(date);
    return (
      <body>
        <Navbar />
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div style={myStyle} className="container is-size-4">
              {todoItems}
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default App