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
    <>
    <h2 className="mb-3 mt-3 text-3xl flex justify-center font-semibold md:text-4xl">Trip Legs</h2>
    <Leg tripId={numericTripId} />
    <h2 className="mb-3 mt-3 text-3xl flex justify-center font-semibold md:text-4xl">Trip Journals</h2>
    <Journal tripId={numericTripId} />
    </>
  )
}

export default TripDetailsPage