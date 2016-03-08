import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h1>Github battle</h1>
      <Link to="/playerOne">
        <button type="button">Get Started</button>
      </Link>
    </div>
  )
}

export default Home
