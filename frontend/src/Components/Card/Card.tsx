import React from 'react'
import "./Card.css";


interface Props {
    tripName: string;
    distanceTraveledInMiles: number;

}

const Card: React.FC<Props> = ({tripName, distanceTraveledInMiles}: Props) : JSX.Element => {
  return (
    <div className="card">
        <img src="https://wallpaperaccess.com/full/254381.jpg" alt="Image" />
        <div className="details">
            <h2>{tripName}</h2>
            <p>{distanceTraveledInMiles} Miles</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repudiandae!</p>
    </div>
  )
}

export default Card