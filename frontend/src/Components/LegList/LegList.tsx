import React, { SyntheticEvent } from 'react'
import { LegGet } from '../../Models/Leg';
import LegListItem from '../LegListItem/LegListItem';

type Props = {
    legs: LegGet[];
    onLegDelete: (e: SyntheticEvent) => void;
}

const LegList = ({legs, onLegDelete}: Props) => {
  return (
    <>
    {legs ? legs.map((leg) => {
        return <LegListItem leg={leg} onLegDelete={onLegDelete}/>
    }) : ""}
    </>
  )
}

export default LegList