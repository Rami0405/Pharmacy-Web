import React, { useContext, useEffect, useState } from 'react';
import CardPage from './images';
import './productpage.css';
import Navbar from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from './loadingscreen';
import { CartContext } from './cardcontext';

const ProductPage = () => {
    const [rotate, setRotate] = useState(180);
    const [rotate2, setRotate2] = useState(180);
    const [rotate3, setRotate3] = useState(180);
    const [rotate4, setRotate4] = useState(180);

    const [selectedML, setSelectedML] = useState('');
    const [selectedC, setSelectedC] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showProductRank, setShowProductRank] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);

    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    const incrementCount = () => {
        setCount(count + 1);
    };
    useEffect(() => {
        // Simulate a 2-second delay before opening the ProductPage
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            // Clean up the timeout when the component unmounts
            clearTimeout(timeout);
        };
    }, []);

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleCardClick = (cardId) => {
        switch (cardId) {
            case 1:
                setRotate(rotate === 0 ? 180 : 0);
                setShowMessage(!showMessage);
                break;
            case 2:
                setRotate2(rotate2 === 0 ? 180 : 0);
                setShowProductRank(!showProductRank);
                break;
            case 3:
                setRotate3(rotate3 === 0 ? 180 : 0);
                setShowHow(!showHow);
                break;
            case 4:
                setRotate4(rotate4 === 0 ? 180 : 0);
                setShowIngredients(!showIngredients);

                break;
            default:
                break;
        }
    };



    const handleMLClick = (mlValue) => {
        setSelectedML(mlValue);
    };
    const handleAddToCart = () => {
        addToCart(count); // Pass the count value to the addToCart function
    };
    const handleMLClick2 = (CValue) => {
        setSelectedC(CValue);
    };
    const cardStyle = {
        boxShadow: rotate === 0 ? '0 2px 4px rgba(0, 0, 0, 0)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: rotate === 0 ? '10px 10px 0px 0px' : '10px',
    };
    const cardStyle2 = {
        boxShadow: rotate2 === 0 ? '0 2px 4px rgba(0, 0, 0, 0)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: rotate2 === 0 ? '10px 10px 0px 0px' : '10px',
    };
    const cardStyle3 = {
        boxShadow: rotate3 === 0 ? '0 2px 4px rgba(0, 0, 0, 0)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: rotate3 === 0 ? '10px 10px 0px 0px' : '10px',
    };
    const cardStyle4 = {
        boxShadow: rotate4 === 0 ? '0 2px 4px rgba(0, 0, 0, 0)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: rotate4 === 0 ? '10px 10px 0px 0px' : '10px',
    };
    const desStyle = {
        opacity: showMessage ? 1 : 0,
        display: showMessage ? 'block' : 'none',
        transition: 'opacity 0.3s ease-in-out',
    };

    const productRankStyle = {
        opacity: showProductRank ? 1 : 0,
        display: showProductRank ? 'block' : 'none',
        transition: 'opacity 0.3s ease-in-out',
    };
    const howStyle = {
        opacity: showHow ? 1 : 0,
        display: showHow ? 'block' : 'none',
        transition: 'opacity 0.3s ease-in-out',
    };
    const ingStyle = {
        opacity: showIngredients ? 1 : 0,
        display: showIngredients ? 'block' : 'none',
        transition: 'opacity 0.3s ease-in-out',
    };
    return (
        <div>

            <Navbar />
            {isLoading ? <LoadingScreen /> :
                <div className={'fade-down'}>
                    <div className="product-page">
                        <h1>NOW 5-HTP</h1>

                        <div className="product-page2">
                            <div className='card-pages'>
                                <CardPage />
                            </div>
                            <div className='h1-container'>
                                <div className='ml'>
                                    <div>
                                        <div className='ptancy'>
                                            <h4>potancy:  <span className="ml-value">{selectedML}</span></h4>
                                            <div className='ml2'>
                                                <div className={`des2 ${selectedML === '50 ML' ? 'selected' : ''}`} onClick={() => handleMLClick('50 ML')}>50 ML</div>
                                                <div className={`des2 ${selectedML === '100 ML' ? 'selected' : ''}`} onClick={() => handleMLClick('100 ML')}>100 ML</div>
                                            </div>
                                        </div>
                                        <div className='ptancy'>
                                            <h4>Package Quantity:  <span className="ml-value">{selectedC}</span></h4>
                                            <div className='ml2'>
                                                <div className={`des2 ${selectedC === '60 Count' ? 'selected' : ''}`} onClick={() => handleMLClick2('60 Count')}>60 </div>
                                                <div className={`des2 ${selectedC === '120 Count' ? 'selected' : ''}`} onClick={() => handleMLClick2('120 Count')}>120 </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h1-container2'>
                                        <div className='des3'>
                                            <p>Total price: &nbsp;&nbsp;{selectedML && selectedC && <span className="price-value">{70 * count} AED</span>}
                                            </p>
                                            <div className="number-counter">
                                                <button className={`minus-button ${count === 1 ? 'disabled' : ''}`}
                                                    disabled={count === 1} onClick={decrementCount}>-</button>
                                                <div className="count">{count}</div>
                                                <button className="plus-button" onClick={incrementCount}>+</button>
                                            </div>
                                            <button className='button' onClick={handleAddToCart}>Add to Cart</button>
                                            <p style={{ fontWeight: "500", fontSize: "small" }}>Free shipping over 240 AED</p>

                                        </div>
                                    </div>

                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <h3 style={{ color: "red" }}>Caution!</h3>
                                    <p style={{ color: "red" }}>For adults only. Not recommended for pregnant/nursing women. Consult physician if taking medications (especially antidepressants), or have a medical condition. May cause drowsiness and mild transient GI symptoms. Take with food in case of GI upset. Keep out of reach of children.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='h1-container3'>
                            <div className="cards" onClick={() => handleCardClick(1)} style={cardStyle}>
                                <div className="left-side">description</div>
                                <div className="right-side">
                                    <FontAwesomeIcon icon={faCaretDown} rotation={rotate} size="xl" />
                                </div>
                            </div>
                            <div className='des fade-down' style={desStyle}>
                                <p>
                                    5-HTP, the intermediate metabolite between the amino acid L-tryptophan and serotonin, is extracted from the seed of an African plant (Griffonia simplicifolia).
                                    Since 5-HTP increases the synthesis of serotonin, it is used for several diseases where serotonin is believed to play an important role including depression, insomnia and obesity.<br />
                                    5-HTP ، المستقلب الوسيط بين الأحماض الأمينية L-tryptophan و serotonin ، يتم استخراجه من بذور نبات أفريقي (Griffonia simplicifolia).
                                    نظرًا لأن 5-HTP يزيد من تصنيع السيروتونين ، فإنه يستخدم للعديد من الأمراض حيث يُعتقد أن السيروتونين يلعب دورًا مهمًا بما في ذلك الاكتئاب والأرق والسمنة.

                                </p>
                            </div>
                            <div className="cards" onClick={() => handleCardClick(2)} style={cardStyle2}>
                                <div className="left-side">Product rank</div>
                                <div className="right-side">
                                    <FontAwesomeIcon icon={faCaretDown} rotation={rotate2} size="xl" />
                                </div>
                            </div>
                            <div className='des fade-down' style={productRankStyle}>
                                <p>
                                    #2 in 5-HTP<br />
                                    #14 in Weight Loss<br />
                                    #56 in Sleep<br />
                                    #421 in Supplements<br />
                                </p>
                            </div>
                            <div className="cards" onClick={() => handleCardClick(3)} style={cardStyle3}>
                                <div className="left-side">How to use</div>
                                <div className="right-side">
                                    <FontAwesomeIcon icon={faCaretDown} rotation={rotate3} size="xl" />
                                </div>
                            </div>
                            <div className='des fade-down' style={howStyle}>
                                <p>
                                    Take 1 capsule daily, preferably on an empty stomach at bedtime.<br />
                                    Store in a cool, dry place after opening.
                                </p>
                            </div>
                            <div className="cards" onClick={() => handleCardClick(4)} style={cardStyle4}>
                                <div className="left-side">Ingredients </div>
                                <div className="right-side">
                                    <FontAwesomeIcon icon={faCaretDown} rotation={rotate4} size="xl" />
                                </div>
                            </div>
                            <div className='des fade-down' style={ingStyle} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
                                        <tbody>
                                            <tr>
                                                <th style={{ border: "1px solid black", padding: "8px" }}>Ingredient</th>
                                                <th style={{ border: "1px solid black", padding: "8px" }}>Amount</th>
                                            </tr>
                                            <tr>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>5-HTP (5-hydroxytryptophan) (from Griffonia simplicifolia Extract) (Seed)</td>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>100 mg</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>Rice flour</td>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>&lt; 1 mg</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>Hypromellose (cellulose capsule)</td>
                                                <td style={{ border: "1px solid black", padding: "8px" }}>&lt; 1 mg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductPage;
