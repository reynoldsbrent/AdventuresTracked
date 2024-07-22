import React from 'react'
import { LegGet } from '../../Models/Leg';

type Props = {
    leg: LegGet;
}

const LegListItem = ({ leg }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 ml-4 mr-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-blue-700 text-xl whitespace-nowrap truncate overflow-hidden">
              {leg.departureAirportId} - {leg.arrivalAirportId}
            </p>
          </div>
          <p className="text-dark text-sm">Departure Date: {leg.departureDate}</p>
          <p className="text-dark text-sm">Arrival Date: {leg.arrivalDate}</p>
          <p className="text-dark text-sm">Miles traveled: {leg.distanceMiles}</p>
          <p className="float-left hover:text-gray-500">Edit</p>
          <p className="float-right hover:text-red-500">Delete</p>
        </div>
      </div>
    </div>
  )
}

export default LegListItem