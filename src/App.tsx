import React from 'react'
import Navbar from './components/Navbar'
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

interface MyProps {

}

interface todoItem {
  id: number,
  text: string,
  completed: boolean
}

interface People {
  name: String
}

interface MyState {
  todoItems: todoItem[];
  character: Array<People>;
}

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      todoItems: todosData,
      character: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => console.log(data.results))
  }


  handleChange(id: number) {
    this.setState(prevstate => {
      prevstate.todoItems.map(todoItem => {
        if (todoItem.id === id) {
          todoItem.completed = !todoItem.completed
        }
      })
    })
  }

  render() {
    const todoItems = todosData.map((todoItem): any => (
      <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        completed={todoItem.completed}
        handleChange={this.handleChange}
      />
    ))
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div style={myStyle} className="container is-size-4">
              {/* {todoItems} */}
              {/* {this.state.character.name} */}
              {console.log(this.state.character)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App