import React from 'react'
import './App.css'
import Users from './app/components/Users'
import UsersThunk from './app/components/UsersThunk'


function App() {

  return (
    <div className='App'>
      <Users />
      <hr/>
      <UsersThunk />
    </div>
  )
}

export default App
