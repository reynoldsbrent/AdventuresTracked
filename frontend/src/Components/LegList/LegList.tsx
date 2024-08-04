import React, { SyntheticEvent } from 'react'
import { LegGet } from '../../Models/Leg';
import LegListItem from '../LegListItem/LegListItem';

type Props = {
    legs: LegGet[];
    onLegDelete: (e: SyntheticEvent) => void;
    onLegEdit: (leg: LegGet) => void;
}

const LegList = ({legs, onLegDelete, onLegEdit}: Props) => {
  return (
    <>
    {legs ? legs.map((leg) => {
        return <LegListItem leg={leg} onLegDelete={onLegDelete} onLegEdit={onLegEdit}/>
    }) : ""}
    </>
  )
}

export default LegList