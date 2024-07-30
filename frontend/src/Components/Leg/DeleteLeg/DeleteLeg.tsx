import React, { SyntheticEvent } from 'react'

type Props = {
    onLegDelete: (e: SyntheticEvent) => void;
    legValue: number;
}

const DeleteLeg = ({onLegDelete, legValue}: Props) => {
  return (
    <div>
        <form onSubmit={onLegDelete}>
            <input hidden={true} value={legValue}></input>
            <button className="float-left text-red-500 hover:text-red-600">Delete</button>
        </form>
    </div>
  )
}

export default DeleteLeg