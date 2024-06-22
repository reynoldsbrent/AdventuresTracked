import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card tripName="Hawaii 2024" distanceTraveledInMiles={3500}/>
        <Card tripName="Flroida 2023" distanceTraveledInMiles={1800}/>
        <Card tripName="Out West 2022" distanceTraveledInMiles={2500}/>

    </div>
  )
}

export default CardList