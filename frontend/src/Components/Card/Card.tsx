import React from 'react'
import "./Card.css";


interface Props {
    tripName: string;
    id: number;
    startDate: string;
    endDate: string;

}

const Card: React.FC<Props> = ({id, tripName, startDate, endDate}: Props) : JSX.Element => {
  return (
    <div className="card">
        <img src="https://wallpaperaccess.com/full/254381.jpg" alt="Image" />
        <div className="details">
            <h2>{tripName}</h2>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repudiandae!</p>
    </div>
  )
}

export default Card