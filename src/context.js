import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [isSingle, setIsSingle] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    setIsSingle(false)
    try {
      const response = await fetch('https://api.github.com/users')
      const respjson = await response.json()
      const users = respjson.map((user) => {
        const {login, id, avatar_url, html_url, type} = user
        return {username: login, id: id, image: avatar_url, profile_url:html_url, type:type}
      })
      setUsers(users)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  const fetchUserByUsername = async (username) => {
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const newrespjson = await response.json()
      const users = {username: newrespjson.login, id: newrespjson.id, image: newrespjson.avatar_url, profile_url:newrespjson.html_url, type:newrespjson.type}
      if(newrespjson.id === undefined){
        setUsers("")
        setLoading(false)
      }else{
        setUsers(users)
        setIsSingle(true)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return <AppContext.Provider value={{
    loading,
    users,
    fetchUserByUsername,
    isSingle,
    fetchUsers,
    setIsSingle
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
