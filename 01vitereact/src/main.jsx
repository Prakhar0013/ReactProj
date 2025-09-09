import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App ! </h1>
    </div>
  )
}

// const reactElement= {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click Me To Visit Google'
// }


const anotherUser = "Rajashekhar"

const reactElement= React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click to Visit Google',
  anotherUser  
)


const anotherElement= (
  <a href="https://google.com" target="_blank">Visit Me</a>
)


createRoot(document.getElementById('root')).render(
  reactElement
)
