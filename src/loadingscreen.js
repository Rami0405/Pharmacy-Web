import React from 'react';
import './LoadingScreen.css'; // Import your CSS file for styling

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <div className="circle-container">
                <div className="circle circle1"></div>
            </div>
            <div className="circle-container">
                <div className="circle circle2"></div>
            </div>
            <div className="circle-container">
                <div className="circle circle3"></div>
            </div>
        </div>
    );
};


export default LoadingScreen;
