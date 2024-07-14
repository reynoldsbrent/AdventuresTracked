import React from 'react'
import { PortfolioGet } from '../../../Models/Portfolio';

type Props = {
    portfolioValue: PortfolioGet;
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        {portfolioValue.tripName} 
        <p>Trip ID: {portfolioValue.tripId}</p> 
        <p>Start Date: {portfolioValue.startDate}</p>
        <p>End Date: {portfolioValue.endDate}</p>
    </div>
  )
}

export default CardPortfolio