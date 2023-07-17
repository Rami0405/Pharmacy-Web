import React from 'react';
import './medicine.css'
const Card = ({ image, title, description, price }) => {
    return (
        <div className="carde">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Card;
