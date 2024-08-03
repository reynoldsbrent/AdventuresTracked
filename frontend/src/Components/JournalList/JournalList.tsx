import React, { SyntheticEvent } from 'react'
import { JournalGet } from '../../Models/Journal';
import JournalListItem from '../JournalListItem/JournalListItem';

type Props = {
    journals: JournalGet[];
    onJournalDelete: (e: SyntheticEvent) => void;
    onJournalEdit: (journal: JournalGet) => void;
}

const JournalList = ({journals, onJournalDelete, onJournalEdit}: Props) => {
  return (
    <>
    {journals ? journals.map((journal) => {
        return <JournalListItem 
        key={journal.journalId} 
        journal={journal} 
        onJournalDelete={onJournalDelete}
        onJournalEdit={onJournalEdit}
      />
    }) : ""}
    </>
  )
}

export default JournalList