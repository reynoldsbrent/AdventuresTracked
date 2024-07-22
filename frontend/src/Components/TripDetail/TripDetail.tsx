import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LegGet } from '../../Models/Leg';
import { legGetAPI } from '../../Services/LegService';

type Props = {}

const TripDetail = (props: Props) => {
  let { tripId } = useParams();
  const [leg, setLeg] = useState<LegGet>();
  const numericTripId = Number(tripId);

  useEffect(() => {
    const  getLegInit = async () => {
      const result = await legGetAPI(numericTripId);
      setLeg(result?.data[0]);
    }
    getLegInit();
  }, [])
  return (
    <>
    {leg ? (
      <div>{leg.tripId} - {leg.distanceMiles}</div>
    ) : (
      <div>Leg not found</div>
    )}
    </>
  )
}

export default TripDetail