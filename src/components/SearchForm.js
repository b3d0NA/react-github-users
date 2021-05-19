import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {fetchUserByUsername, fetchUsers, setIsSingle} = useGlobalContext()
  const searchRef = React.useRef('')

  const handleSearch = () => {
    const username = searchRef.current.value
    if(username === ""){
      setIsSingle(false)
      fetchUsers()
    }else{
      fetchUserByUsername(username)
    }
  }
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="username">Search your favourite users</label>
          <input type="text" id="username" ref={searchRef} onChange={handleSearch}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
