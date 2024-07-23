import React, { useEffect, useState } from 'react'
import JournalForm from './JournalForm/JournalForm';
import { journalGetAPI, journalPostAPI } from '../../Services/JournalService';
import { toast } from 'react-toastify';
import { JournalGet } from '../../Models/Journal';
import JournalList from '../JournalList/JournalList';

type Props = {
    tripId: number;
};

type JournalFormInputs = {
    title: string;
    entry: string;
};

const Journal = ({tripId}: Props) => {
    const [ journals, setJournals] = useState<JournalGet[] | null>(null);

    useEffect(() => {
        getJournals();
    }, []);

    const handleJournal = (e: JournalFormInputs) => {
        journalPostAPI(tripId, e.title, e.entry).then((res) => {
            if(res) {
                toast.success("Journal created")
                getJournals();
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

  return (
    <div className="flex flex-col">
    <JournalList journals={journals!} />
    <JournalForm tripId={tripId} handleJournal={handleJournal}/>
    </div>
  )
}

export default Journal