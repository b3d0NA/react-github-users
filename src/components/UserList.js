import React from 'react'
import User from './User'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const UserList = () => {
  const {loading, users, isSingle} = useGlobalContext()
  if(loading){
    return <Loading />
  }
  if(users === ""){
    return <h2 className="section-title">
      no users matched your search criteria
    </h2>
  }
  if(isSingle){
    return (<>
      <section className="section">
        <h2 className="section-title">Github Users</h2>
        <div className="cocktails-center">
          <User key={users.id} {...users} />
        </div>
      </section>
    </>)
  }
  return (<>
    <section className="section">
      <h2 className="section-title">Github Users</h2>
      <div className="cocktails-center">
        {users.map((user) => {
          return <User key={user.id} {...user} />
        })}
      </div>
    </section>
  </>)
}

export default UserList
