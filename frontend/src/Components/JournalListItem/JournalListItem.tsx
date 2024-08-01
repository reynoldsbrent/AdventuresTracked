import React, { SyntheticEvent } from 'react'
import { JournalGet } from '../../Models/Journal';
import DeleteJournal from '../Journal/DeleteJournal/DeleteJournal';
import { DateFormatService } from '../../Services/DateFormatService';

type Props = {
    journal: JournalGet;
    onJournalDelete: (e: SyntheticEvent) => void;
}

const JournalListItem = ({ journal, onJournalDelete }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 ml-4 mr-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-blue-700 text-xl text-transform: capitalize whitespace-nowrap truncate overflow-hidden">
              {journal.title}
            </p>
          </div>
          <p className="className=-mt-4 text-gray-500">{DateFormatService(journal.createdAt)}</p>
          <p className="className=-mt-4 text-gray-500">{journal.entry}</p>
          <p className="float-left hover:text-gray-500">Edit</p>
          <DeleteJournal onJournalDelete={onJournalDelete} journalValue={journal.journalId} />
        </div>
      </div>
    </div>
  )
}

export default JournalListItem