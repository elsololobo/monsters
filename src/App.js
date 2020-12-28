import React, { useEffect, useState } from 'react'
import './assets/App.css'
import { fetchUsers } from './api/user.api'
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  let [monsters, setMonsters] = useState([])
  let [searchFiled, setSearchField] = useState('')

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

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchFiled.toLowerCase())
  )

  return (
    <div className="App">
      <SearchBox
        placeholder={'Search Monsters'}
        handleChange={handleChange}
        value={searchFiled}
      />
      {monsters && <CardList monsters={filteredMonsters} />}
    </div>
  )
}

export default App
