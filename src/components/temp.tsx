import React from 'react'
import Joke from './Joke'

function App(): any {
  return (
    <body>
      <Joke 
       meme = {{question: 'hai', imageUrl: 'https://placekitten.com/200/300', punchline: 'bye' }}
      />
      <Joke
        meme = {{question: 'hello', imageUrl: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg', punchline: 'jello' }}
      />
      <Joke
        meme = {{question: 'fight', imageUrl: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg', punchline: 'bite' }}
      />
      <Joke
        meme = {{question: 'owl', imageUrl: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg', punchline: 'bowl' }}
      />
      <Joke
        meme = {{question: 'pee', imageUrl: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg', punchline: 'poo' }}
      />
    </body>
  )
}

export default App