import React from 'react';
import Card from './medicine';
import pic from './medicine1.jpg';
import './CylinderPage.css';
import pic2 from './medicine2.jpg';
import { Link } from 'react-router-dom';

const CylinderPage = ({ searchQuery }) => {
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
        // Add more product objects as needed
    ];

    // Filter products based on search query
    const filteredProducts = searchQuery
        ? products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : products;

    return (
        <div className="container-xyz">
            <h1>Our products</h1>
            <div className="card-container-xyz">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <Link to="/product" className="card-xyz clicked-xyz" style={{ color: 'black', textDecoration: 'none' }} key={index}>
                            <div >
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
