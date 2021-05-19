import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, users, isSingle} = useGlobalContext()
  if(loading){
    return <Loading />
  }
  if(users === ""){
    return <h2 className="section-title">
      no cocktails match your search criteria
    </h2>
  }
  if(isSingle){
    return (<>
      <section className="section">
        <h2 className="section-title">Github Users</h2>
        <div className="cocktails-center">
          <Cocktail key={users.id} {...users} />
        </div>
      </section>
    </>)
  }
  return (<>
    <section className="section">
      <h2 className="section-title">Github Users</h2>
      <div className="cocktails-center">
        {users.map((user) => {
          return <Cocktail key={user.id} {...user} />
        })}
      </div>
    </section>
  </>)
}

export default CocktailList
