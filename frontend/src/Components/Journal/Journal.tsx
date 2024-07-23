import React from 'react'
import JournalForm from './JournalForm/JournalForm';
import { journalPostAPI } from '../../Services/JournalService';
import { toast } from 'react-toastify';

type Props = {
    tripId: number;
};

type JournalFormInputs = {
    title: string;
    entry: string;
};

const Journal = ({tripId}: Props) => {
    const handleJournal = (e: JournalFormInputs) => {
        journalPostAPI(tripId, e.title, e.entry).then((res) => {
            if(res) {
                toast.success("Journal created")
            }
        }).catch((e) => {
            toast.warning(e);
        })
    }
  return (
    <JournalForm tripId={tripId} handleJournal={handleJournal}/>
  )
}

export default Journal