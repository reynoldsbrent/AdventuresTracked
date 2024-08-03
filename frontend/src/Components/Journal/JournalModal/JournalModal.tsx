import React from 'react'
import JournalForm from '../JournalForm/JournalForm';
import { JournalGet } from '../../../Models/Journal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    tripId: number;
    handleJournal: (e: JournalFormInputs) => void;
    editingJournal: JournalGet | null;
  };

type JournalFormInputs = {
    title: string;
    entry: string;
};

const JournalModal = ({ isOpen, onClose, tripId, handleJournal, editingJournal }: Props) => {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{editingJournal ? 'Edit Journal' : 'Add New Journal'}</h2>
            <JournalForm tripId={tripId} handleJournal={handleJournal} initialData={editingJournal} />
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

export default JournalModal