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
    <div className="bg-white rounded-xl mb-4 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
  <div className="p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-semibold text-blue-600 capitalize truncate">
        {journal.title}
      </h3>
      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
        {DateFormatService(journal.createdAt)}
      </span>
    </div>
    
    <div className="mb-4">
      <p className="text-gray-600 text-sm line-clamp-3">
        {journal.entry}
      </p>
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
      <button 
        className="text-blue-500 hover:text-blue-700 transition-colors duration-150 ease-in-out font-medium"
        onClick={() => {/* Add your edit function here */}}
      >
        Edit
      </button>
      <DeleteJournal onJournalDelete={onJournalDelete} journalValue={journal.journalId} />
    </div>
  </div>
</div>
  )
}

export default JournalListItem