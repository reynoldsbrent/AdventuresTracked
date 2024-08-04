import React, { SyntheticEvent } from 'react'
import { PortfolioGet } from '../../../Models/Portfolio';
import { Link } from 'react-router-dom';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { DateFormatService } from '../../../Services/DateFormatService';
import { FaEdit, FaCalendarAlt } from 'react-icons/fa';

type Props = {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
    onEditClick: (trip: PortfolioGet) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete, onEditClick}: Props) => {
  return (
    <div className="bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex">
      <div className="w-1/3 flex-shrink-0">
        <img 
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Trip"
        />
      </div>
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <Link to={`/trips/${portfolioValue.tripId}`} className="block mb-2">
            <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              {portfolioValue.tripName}
            </h2>
          
          <div className="flex items-center text-gray-600 mb-2">
            <FaCalendarAlt className="mr-2" />
            <span>{DateFormatService(portfolioValue.startDate)} - {DateFormatService(portfolioValue.endDate)}</span>
          </div>
          </Link>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={() => onEditClick(portfolioValue)}
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <FaEdit className="mr-1" /> Edit
          </button>
          <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue.tripId}/>
        </div>
      </div>
    </div>
  )
}

export default CardPortfolio