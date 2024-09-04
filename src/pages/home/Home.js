import React from 'react'
import Banner from './components/Banner'
import SellOrRent from './components/SellOrRent'
import ApartmentAndVilla from './components/ApartmentAndVilla'
import ProjectInDemand from './components/ProjectInDemand'
import UpComingProjects from './components/UpComingProjects'
import PopularCities from './components/PopularCities'
import ExplorePopularLocality from './components/ExplorePopularLocality'

export default function Home() {
  return (
    <div className='overflow-hidden'>
        <Banner/>
          <SellOrRent/>
          <ApartmentAndVilla/>
          <div className="bg-sky-100">
          <ProjectInDemand/>
          </div>
          <UpComingProjects/>
          <div className="bg-[#090E1B]">
            <ExplorePopularLocality/>
          </div>
          <div className="bg-sky-100">
            <PopularCities/>
          </div>
    </div>
  )
}
