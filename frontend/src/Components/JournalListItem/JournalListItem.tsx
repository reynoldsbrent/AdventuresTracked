import React from 'react'
import { JournalGet } from '../../Models/Journal';

type Props = {
    journal: JournalGet;
}

const JournalListItem = ({ journal }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 ml-4 mr-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-blue-700 text-xl whitespace-nowrap truncate overflow-hidden">
              {journal.title}
            </p>
          </div>
          <p className="className=-mt-4 text-gray-500">{journal.entry}</p>
          <p className="float-left hover:text-gray-500">Edit</p>
          <p className="float-right hover:text-red-500">Delete</p>
        </div>
      </div>
    </div>
  )
}

export default JournalListItem