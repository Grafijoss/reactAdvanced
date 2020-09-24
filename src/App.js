import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'

const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <PhotoCard />
  </div>
)

export default App
