import React, { useState } from 'react';
import CylinderPage from './main';
import Navbar from './Nav';
import './landingPage.css'
import LoadingScreen2 from './loadingscreen2';
const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setIsLoading(true);

        // Simulating an asynchronous request with a 2-second delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return (
        <div>
            <Navbar onSearch={handleSearch} />
            {isLoading ? (<LoadingScreen2 />) : <div className={`${searchQuery ? 'fade-in' : ''}`}>
                <CylinderPage searchQuery={searchQuery} />
            </div>}

        </div>
    );
};

export default LandingPage;
