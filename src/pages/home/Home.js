import React from 'react'
import Banner from './components/Banner'
import SellOrRent from './components/SellOrRent'

export default function Home() {
  return (
    <div className=' overflow-hidden'>
        <Banner/>
        <SellOrRent/>
    </div>
  )
}
