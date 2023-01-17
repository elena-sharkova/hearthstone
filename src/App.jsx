import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'
import Sort from './components/sort/Sort'
import { Flex, Title } from '@mantine/core'

const apiKey = process.env.REACT_APP_RAPID_API_KEY

const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState(cards)
  const [sortField, setSortField] = useState('')
  const [sortedCards, setSortedCards] = useState([])
  console.log('render')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  const onSortChange = (event) => {
    const sortFieldString = event
    setSortField(sortFieldString)
  }

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setCards(json))
      .catch((err) => console.error('error:' + err))
  }, [])

  useEffect(() => {
    const newFilteredCards = cards.filter((card) =>
      card.name.toLowerCase().includes(searchField)
    )
    setFilteredCards(newFilteredCards)
  }, [cards, searchField])

  useEffect(() => {
    let newSortedCards = [...filteredCards]
    if (sortField) {
      newSortedCards = newSortedCards.sort((a, b) => (a.name > b.name ? 1 : -1))
    }
    setSortedCards(newSortedCards)
  }, [filteredCards, sortField])

  return (
    <div className="App">
      <Title style={{ marginTop: '3%', marginBottom: '1%' }} className="title">
        Useless Hearthstone Rolodex
      </Title>

      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        <SearchBox
          onChangeHandler={onSearchChange}
          searchType="Search cardbacks"
          className="search-box"
        />
        <Sort value={sortField} onChangeHandler={onSortChange} />
      </Flex>

      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <CardList
          cards={sortedCards.length > 0 ? sortedCards : filteredCards}
        />
      </Flex>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       cards: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) =>
//         this.setState(() => {
//           return { cards: json }
//         })
//       )
//       .catch((err) => console.error('error:' + err))
//   }

//

//   render() {
//     const { cards, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredCards = cards.filter((card) =>
//       card.name.toLowerCase().includes(searchField)
//     )

//   }
// }

export default App
