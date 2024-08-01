import React, { SyntheticEvent } from 'react'
import { PortfolioGet } from '../../../Models/Portfolio';
import { Link } from 'react-router-dom';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { DateFormatService } from '../../../Services/DateFormatService';

type Props = {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="bg-gray-100 flex overflow-hidden w-full hover:bg-slate-100 rounded-lg shadow-lg md:w-1/0.5">
  <div className="flex-grow p-6 space-y-2 text-left">
    <Link to={`/trips/${portfolioValue.tripId}`} className="block">
      <h2 className="text-xl font-bold">{portfolioValue.tripName}</h2>
      <p>Trip ID: {portfolioValue.tripId}</p> 
      <p>Start Date: {DateFormatService(portfolioValue.startDate)}</p>
      <p>End Date: {DateFormatService(portfolioValue.endDate)}</p>
    </Link>
    <div className="flex mt-4">
      <p className="mr-5 hover:text-gray-500 cursor-pointer">Edit</p>
      <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue.tripId}/>
    </div>
  </div>
  <div className="w-1/3 flex-shrink-0 overflow-hidden rounded-l-md">
    <img 
      className="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Trip"
    />
  </div>
</div>
  )
}

export default CardPortfolio