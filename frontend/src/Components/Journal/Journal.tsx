import React, { useEffect, useState } from 'react'
import JournalForm from './JournalForm/JournalForm';
import { journalDeleteAPI, journalGetAPI, journalPostAPI } from '../../Services/JournalService';
import { toast } from 'react-toastify';
import { JournalGet } from '../../Models/Journal';
import JournalList from '../JournalList/JournalList';
import JournalModal from './JournalModal/JournalModal';

type Props = {
    tripId: number;
};

type JournalFormInputs = {
    title: string;
    entry: string;
};

const Journal = ({tripId}: Props) => {
    const [ journals, setJournals] = useState<JournalGet[] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getJournals();
    }, []);

    const handleJournal = (e: JournalFormInputs) => {
        journalPostAPI(tripId, e.title, e.entry).then((res) => {
            if(res) {
                toast.success("Journal created")
                getJournals();
                setIsModalOpen(false);
            }
        }).catch((e) => {
            toast.warning(e);
        });
    };

    const getJournals = () => {
        journalGetAPI(tripId).then((res) => {
            setJournals(res?.data!);
        });
    };

    const onJournalDelete = (e: any) => {
        e.preventDefault();
        journalDeleteAPI(e.target[0].value).then((res) => {
            if(res?.status == 200) {
              toast.success("Journal Deleted");
              getJournals();
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
    <span>Add Journal</span>
        </button>
    <JournalList journals={journals!} onJournalDelete={onJournalDelete}/>
    <JournalModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tripId={tripId}
          handleJournal={handleJournal}
        />
    </div>
  )
}

export default Journal