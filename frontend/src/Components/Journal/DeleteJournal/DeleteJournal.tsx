import React, { SyntheticEvent } from 'react'

type Props = {
    onJournalDelete: (e: SyntheticEvent) => void;
    journalValue: number;
}

const DeleteJournal = ({onJournalDelete, journalValue}: Props) => {
  return (
    <div>
        <form onSubmit={onJournalDelete}>
            <input hidden={true} value={journalValue}></input>
            <button className="float-left text-red-500 hover:text-red-600">Delete</button>
        </form>
    </div>
  )
}

export default DeleteJournal