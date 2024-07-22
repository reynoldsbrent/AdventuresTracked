import React from 'react'
import { LegGet } from '../../Models/Leg';
import LegListItem from '../LegListItem/LegListItem';

type Props = {
    legs: LegGet[];
}

const LegList = ({legs}: Props) => {
  return (
    <>
    {legs ? legs.map((leg) => {
        return <LegListItem leg={leg} />
    }) : ""}
    </>
  )
}

export default LegList