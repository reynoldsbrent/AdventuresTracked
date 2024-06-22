import React from 'react'
import "./Card.css";
interface Props {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img src="https://wallpaperaccess.com/full/254381.jpg" alt="Image" />
        <div className="details">
            <h2>Florida</h2>
            <p>900 Miles</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repudiandae!</p>
    </div>
  )
}

export default Card