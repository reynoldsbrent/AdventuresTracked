import React, { SyntheticEvent } from 'react'
import { LegGet } from '../../Models/Leg';
import DeleteLeg from '../Leg/DeleteLeg/DeleteLeg';
import { DateFormatService } from '../../Services/DateFormatService';
import { formatNumber } from '../../Services/NumberFormatService';

type Props = {
    leg: LegGet;
    onLegDelete: (e: SyntheticEvent) => void;
    onLegEdit: (leg: LegGet) => void;
}

const LegListItem = ({ leg, onLegDelete, onLegEdit }: Props) => {
  return (
    <div className="bg-white mb-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl text-transform: uppercase font-semibold text-blue-600">
            {leg.departureAirportId} - {leg.arrivalAirportId}
          </h3>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {formatNumber(leg.distanceMiles)} miles
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Departure:</span> {DateFormatService(leg.departureDate)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Arrival:</span> {DateFormatService(leg.arrivalDate)}
          </p>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <button 
          className="text-blue-500 hover:text-blue-700 transition-colors duration-150 ease-in-out font-medium"
          onClick={() => onLegEdit(leg)}
        >
          Edit
        </button>
          <DeleteLeg onLegDelete={onLegDelete} legValue={leg.legId} />
        </div>
      </div>
    </div>
  )
}

export default LegListItem