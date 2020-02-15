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

interface MyState {
  todoItems: todoItem[];
}

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();
    this.state = {
      todoItems: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    console.log('Mounted in App')
  }

  handleChange(id: number) {
    let dummyState = this.state;
    dummyState.todoItems.map((todoItem): void => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
      }
    })
    this.setState(dummyState);
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
    // console.log(typeof(todosData));
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div style={myStyle} className="container is-size-4">
              {todoItems}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App