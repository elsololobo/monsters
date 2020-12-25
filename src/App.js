import React, { useEffect, useState } from 'react'
import './assets/App.css'
import { fetchUsers } from './api/user.api'
import CardList from './components/CardList/CardList'

function App() {
  let [monsters, setMonsters] = useState([])
  let [searchFiled, setSearchField] = useState([])
  useEffect(() => {
    fetchUsers().then(
      (res) => {
        setMonsters(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }, [])
  return (
    <div className="App">{monsters && <CardList monsters={monsters} />}</div>
  )
}

export default App
