import React from 'react'
import { JournalGet } from '../../Models/Journal';
import JournalListItem from '../JournalListItem/JournalListItem';

type Props = {
    journals: JournalGet[];
}

const JournalList = ({journals}: Props) => {
  return (
    <>
    {journals ? journals.map((journal) => {
        return <JournalListItem journal={journal} />
    }) : ""}
    </>
  )
}

export default JournalList