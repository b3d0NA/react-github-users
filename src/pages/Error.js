import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Hell! Go back to hell</h1>
        <button className="btn">
        <Link to="/">Go Home</Link>
        </button>
      </div>
    </section>
  )
}

export default Error
