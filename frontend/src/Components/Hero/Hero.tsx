import React from 'react'
import AdventuresTrackedLogo2 from "./AdventuresTrackedLogo2.svg"
import AdventuresTrackedLogo3 from "./AdventuresTrackedLogo3.png"
import AdventuresTrackedLogo4 from "./AdventuresTrackedLogo4.svg"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold mb-10">
            AdventuresTracked<span className="text-blue-700">.</span>
          </div>
          
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Plan your next<span className="text-blue-700"> adventure</span> all in one spot</h1>
            <div className="w-20 h-2 bg-blue-700 my-4"></div>
            <p className="text-xl mb-10"></p>
            <button className="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
  </div>
  )
}

export default Hero