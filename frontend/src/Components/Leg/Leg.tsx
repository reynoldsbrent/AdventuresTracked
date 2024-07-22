import React from 'react'
import LegForm from './LegForm/LegForm';
import { legPostAPI } from '../../Services/LegService';
import { toast } from 'react-toastify';

type Props = {
    tripId: number;
}

type LegFormInputs = {
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
};

const Leg = ({tripId}: Props) => {
    const handleLeg = (e: LegFormInputs) => {
        legPostAPI(tripId, e.departureAirportId, e.arrivalAirportId, e.departureDate, e.arrivalDate).then((res) => {
            if(res) {
                toast.success("Leg created successfully!")
            }
        }).catch((e) => {
            toast.warning(e);
        })
    }
  return (
    <LegForm tripId={tripId} handleLeg={handleLeg}/>
  )
}

export default Leg