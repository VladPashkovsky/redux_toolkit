import React from 'react'
import './App.css'
import Users from './app/components/Users'
import UsersThunk from './app/components/UsersThunk'
import PostContainer from './app/components/PostContainer'

function App() {
  return (
    <div className="App">
      <Users />
      <hr />
      <UsersThunk />
      <hr />
      <PostContainer />
    </div>
  )
}

export default App
