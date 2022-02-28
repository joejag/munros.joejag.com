import React from 'react'
import './App.css'
import { MUNROS } from './munros'

const LOMOND = MUNROS['lochlomond_ben_lomond']

function App() {
  const munros = LOMOND.munros.length
  const distance = LOMOND.distance
  const ascent = LOMOND.ascent
  const nai = LOMOND.time.naismith
  const grade = LOMOND.grade
  const img = LOMOND.image
  const name = LOMOND.title
  const desc = LOMOND.desc

  return (
    <main>
      {name} : {munros}
    </main>
  )
}

export default App
