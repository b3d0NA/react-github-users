import React from 'react'
const Cocktail = ({username, id, image, profile_url, type}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={username}/>
      </div>
      <div className="cocktail-footer">
        <h3>{username}</h3>
        <p>{type}</p>
        <h4>{profile_url}</h4>
        <a href={`https://www.github.com/${username}`} target='_blank' rel="noopener noreferrer">
          <button className="btn btn-primary btn-details">Details</button>
        </a>
      </div>
    </article>
  )
}

export default Cocktail
