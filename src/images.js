import React, { useState } from 'react';
import p from './medicine1.jpg';
import j from './logo.png';
import c from './medicine2.jpg';
import './images.css';

const Card = ({ image, isSelected, onClick }) => {
    const cardClassName = isSelected ? 'cardss big-card' : 'cardss small-card';

    return (
        <div className={cardClassName} onClick={onClick}>
            <img id="card-img" src={image} alt="Card" />
        </div>
    );
};

const CardPage = () => {
    const [selectedImage, setSelectedImage] = useState(p);
    const [smallImages, setSmallImages] = useState([c, j]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setSmallImages((prevSmallImages) => {
            const filteredImages = prevSmallImages.filter((img) => img !== image);
            filteredImages.push(selectedImage);
            return filteredImages;
        });
    };

    return (
        <div>
            <div className="card-page">
                <Card image={selectedImage} isSelected={true} />
                <div className="card-group">
                    {smallImages.map((image, index) => (
                        <Card
                            key={index}
                            image={image}
                            isSelected={false}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                    {smallImages.map((image, index) => (
                        <Card
                            key={index}
                            image={image}
                            isSelected={false}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                    {smallImages.map((image, index) => (
                        <Card
                            key={index}
                            image={image}
                            isSelected={false}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardPage;
