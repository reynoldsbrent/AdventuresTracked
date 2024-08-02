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
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Journal
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