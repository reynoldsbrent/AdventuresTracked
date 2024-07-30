import React, { useEffect, useState } from 'react'
import LegForm from './LegForm/LegForm';
import { legDeleteAPI, legGetAPI, legPostAPI } from '../../Services/LegService';
import { toast } from 'react-toastify';
import { LegGet } from '../../Models/Leg';
import LegList from '../LegList/LegList';

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
    const [legs, setLeg] = useState<LegGet[] | null>(null);

    useEffect(() => {
       getLegs(); 
    }, []);

    const handleLeg = (e: LegFormInputs) => {
        legPostAPI(tripId, e.departureAirportId, e.arrivalAirportId, e.departureDate, e.arrivalDate).then((res) => {
            if(res) {
                toast.success("Leg created")
                getLegs();
            }
        }).catch((e) => {
            toast.warning(e);
        });
    };

    const getLegs = () => {
        legGetAPI(tripId).then((res) => {
            setLeg(res?.data!);
        })
    };

    const onLegDelete = (e: any) => {
        e.preventDefault();
        legDeleteAPI(e.target[0].value).then((res) => {
            if(res?.status == 200) {
              toast.success("Leg Deleted");
              getLegs();
            }
          })
    }

  return (
    <div className="flex flex-col">
        <LegList legs={legs!} onLegDelete={onLegDelete}/>
        <LegForm tripId={tripId} handleLeg={handleLeg}/>
    </div>
  )
}

export default Leg