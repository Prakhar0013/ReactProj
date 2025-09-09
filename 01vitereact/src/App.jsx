import { useState } from 'react'
import MyPage from './MyPage'
function App() {
  const username= "Prakhar"

  return (
    <>
    <MyPage/>
    <h1>Project</h1>
    <p>Username: {username}</p>
    </>
  )
}

export default App
