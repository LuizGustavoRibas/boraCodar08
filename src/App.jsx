import React from 'react'
import './App.css'
import { Card1, Card2, Card3 } from './components/Card'
import { Banner } from './components/Banner'

function App() {

  return (
    <div>
      <div className='cards'>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div className='bannerInfo'>
        <Banner />
      </div>
    </div>
  )
}

export default App
