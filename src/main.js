import React, { useState } from 'react';
import Card from './medicine';
import pic from './medicine1.jpg';
import './CylinderPage.css';
import pic2 from './medicine2.jpg';
import { Link } from 'react-router-dom';

const CylinderPage = ({ searchQuery }) => {
    const [filter, setFilter] = useState(''); // State for the filter option
    const [sort, setSort] = useState(''); // State for the sort option

    const products = [
        {
            image: pic,
            title: '5-HTP',
            description: '50mg',
            price: '100$',
        },
        {
            image: pic2,
            title: 'E-400',
            description: '110 softgels',
            price: '90$',
        },

        {
            image: pic,
            title: '5-HTP',
            description: '50mg',
            price: '100$',
        },
        {
            image: pic2,
            title: 'E-400',
            description: '110 softgels',
            price: '90$',
        },
        {
            image: pic,
            title: '5-HTP',
            description: '50mg',
            price: '100$',
        },
        {
            image: pic2,
            title: 'E-400',
            description: '110 softgels',
            price: '90$',
        },
        {
            image: pic,
            title: '5-HTP',
            description: '50mg',
            price: '100$',
        },
        {
            image: pic2,
            title: 'E-400',
            description: '110 softgels',
            price: '90$',
        },
        {
            image: pic,
            title: '5-HTP',
            description: '50mg',
            price: '100$',
        },
        {
            image: pic2,
            title: 'E-400',
            description: '110 softgels',
            price: '90$',
        },

        // Add more product objects as needed
    ];

    // Filter products based on search query, filter, and sort options
    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((product) => {
            if (!filter) return true;
            if (filter === 'mg') return product.description.toLowerCase().includes('mg');
            if (filter === 'softgels') return product.description.toLowerCase().includes('softgels');
            return true;
        })
        .sort((a, b) => {
            if (sort === 'asc') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (sort === 'desc') {
                return parseFloat(b.price) - parseFloat(a.price);
            } else {
                return 0;
            }
        });

    // Function to handle filter change
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Function to handle sort change
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <div className="container-xyz">
            <h1>Our products</h1>
            <div className="filter-container">
                {/* Filter input */}
                <p>Filter by &nbsp;</p>
                <select value={filter} className='filter-list' onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="mg">mg</option>
                    <option value="softgels">softgels</option>
                </select>
                {/* Sort options */}
                <p>Sort by &nbsp;</p>
                <select value={sort} className='sort-list' onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            <div className="card-container-xyz">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <Link to="/product" className="card-xyz clicked-xyz" style={{ color: 'black', textDecoration: 'none' }} key={index}>
                            <div>
                                <Card
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Item not found</p>
                )}
            </div>
        </div>
    );
};

export default CylinderPage;
