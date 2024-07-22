import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LegGet } from '../../Models/Leg';
import { legGetAPI } from '../../Services/LegService';
import TripDetail from '../../Components/TripDetail/TripDetail';
import Leg from '../../Components/Leg/Leg';

type Props = {}

const TripDetailsPage = (props: Props) => {
  let { tripId } = useParams();
  const [leg, setLeg] = useState<LegGet>();
  const numericTripId = Number(tripId);

  return (
    <>
    <TripDetail></TripDetail>
    <Leg tripId={numericTripId} />
    </>
  )
}

export default TripDetailsPage