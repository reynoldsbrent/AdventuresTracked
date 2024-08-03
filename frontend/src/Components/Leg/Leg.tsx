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
    className="mb-4 self-start bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out flex items-center space-x-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
    <span>Add Leg</span>
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