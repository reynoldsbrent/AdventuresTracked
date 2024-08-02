import React, { useEffect, useState } from 'react'
import { legDeleteAPI, legGetAPI, legPostAPI } from '../../Services/LegService';
import { toast } from 'react-toastify';
import { LegGet } from '../../Models/Leg';
import LegList from '../LegList/LegList';
import LegModal from './LegModal/LegModal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
       getLegs(); 
    }, []);

    const handleLeg = (e: LegFormInputs) => {
        legPostAPI(tripId, e.departureAirportId, e.arrivalAirportId, e.departureDate, e.arrivalDate).then((res) => {
            if(res) {
                toast.success("Leg created")
                getLegs();
                setIsModalOpen(false);
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Leg
        </button>
        <LegList legs={legs!} onLegDelete={onLegDelete}/>
        <LegModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tripId={tripId}
          handleLeg={handleLeg}
        />
    </div>
  )
}

export default Leg