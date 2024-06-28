import React from 'react'
import { Link } from 'react-router-dom'
//custom error page
// Update and style if needs be

export default function ErrorBoundary() {

  return (
    <div>
      <h1>Page not Found!</h1>
      <p>Something  went wrong.</p>
      <p>Go to <Link to="/">Homepage</Link> and try again</p>
    </div>
  )
}


