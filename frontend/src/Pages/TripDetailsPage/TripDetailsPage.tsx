import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LegGet } from '../../Models/Leg';
import { legGetAPI } from '../../Services/LegService';
import TripDetail from '../../Components/TripDetail/TripDetail';
import Leg from '../../Components/Leg/Leg';
import Journal from '../../Components/Journal/Journal';

type Props = {}

const TripDetailsPage = (props: Props) => {
  let { tripId } = useParams();
  const [leg, setLeg] = useState<LegGet>();
  const numericTripId = Number(tripId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Trip Details</h2>
      
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Trip Legs</h3>
          <Leg tripId={numericTripId} />
        </div>
        
        <div className="border-t border-gray-200"></div>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Trip Journals</h3>
          <Journal tripId={numericTripId} />
        </div>
      </div>
    </div>
  )
}

export default TripDetailsPage