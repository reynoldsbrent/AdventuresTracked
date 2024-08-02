import React from 'react';
import LegForm from '../LegForm/LegForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tripId: number;
  handleLeg: (e: LegFormInputs) => void;
};

type LegFormInputs = {
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
};

const LegModal = ({ isOpen, onClose, tripId, handleLeg }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Add New Leg</h2>
        <LegForm tripId={tripId} handleLeg={handleLeg} />
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LegModal;