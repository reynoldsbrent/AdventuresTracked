import React from 'react'
import { PortfolioGet } from '../../../Models/Portfolio';
import { Link } from 'react-router-dom';

type Props = {
    portfolioValue: PortfolioGet;
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
    <div className="bg-gray-100 flex-col w-full p-20 space-y-50 hover:bg-slate-100 text-center rounded-lg shadow-lg md:w-1/0.5">

    <Link to={`/trips/${portfolioValue.tripId}`} >
        {portfolioValue.tripName} 
        <p>Trip ID: {portfolioValue.tripId}</p> 
        <p>Start Date: {portfolioValue.startDate}</p>
        <p>End Date: {portfolioValue.endDate}</p>
    </Link>
    <p className="float-left mr-5 hover:text-gray-500">Edit</p>
    <p className="float-left hover:text-red-500">Delete</p>
    </div>
  )
}

export default CardPortfolio