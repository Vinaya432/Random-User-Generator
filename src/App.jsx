import React from 'react'
import UserCard from './UserCard'
import {Card} from 'react-bootstrap'

function App() {
  return (
    <div style={{width:'400px'}} className='container d-flex flex-column justify-content-center align-items-center mt-5 shadow rounded border '>
      <h2 className='mb-5 mt-3 text-warning'>Random user Generator</h2>
      <Card style={{ width: '19rem' }}>
        <UserCard/>
      </Card>
    </div>
  )
}

export default App