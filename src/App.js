import { useState, useEffect } from "react"

import "./App.css"
import CardList from "./components/cardList/cardList.component"
import SearchBox from "./components/searchBox/searchBox.component"

const App = () => {
  const [kittens, setKittens] = useState([])
  const [filteredKittens, setFilteredKittens] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch("https://api.onlinewebtutorblog.com/employees")
      .then((response) => response.json())
      .then((users) => {
        setKittens(users.data)
        console.log(users)
      })
  }, [])

  useEffect(() => {
    const newFilteredKittens = kittens.filter((kitten) => {
      return kitten.name.toLowerCase().includes(searchField)
    })
    setFilteredKittens(newFilteredKittens)
  }, [kittens, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Cartoon KittenDex</h1>
      <SearchBox
        className="kitten-search-box"
        placeholder="Search Kittens"
        onChangeHandler={onSearchChange}
      />

      <CardList kittens={filteredKittens} />
    </div>
  )
}

export default App
