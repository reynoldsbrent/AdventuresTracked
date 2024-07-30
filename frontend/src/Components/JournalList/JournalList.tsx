import React, { SyntheticEvent } from 'react'
import { JournalGet } from '../../Models/Journal';
import JournalListItem from '../JournalListItem/JournalListItem';

type Props = {
    journals: JournalGet[];
    onJournalDelete: (e: SyntheticEvent) => void;
}

const JournalList = ({journals, onJournalDelete}: Props) => {
  return (
    <>
    {journals ? journals.map((journal) => {
        return <JournalListItem journal={journal} onJournalDelete={onJournalDelete}/>
    }) : ""}
    </>
  )
}

export default JournalList