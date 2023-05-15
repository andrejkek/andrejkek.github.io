import React from 'react';
import rightImage from '../assets/7018-BS-GR_3.png';
import spinningLogo from '../assets/Group 6.svg';
import './Section7.css';

const Section7 = () => {
    return (
        <div style={{ backgroundColor: 'white', padding: '40px 20px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', maxWidth: '600px' }}>
                    <h4>THE ULTIMATE BREW GUIDES</h4>
                    <h2><b>COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO</b></h2>
                    <p><b>You can taste it when you’ve brewed with the perfect coffee to water ratio.</b> The acidity pops every so slightly, enhancing the rich flavors and aromas. Your coffee’s mouthfeel is smooth and satisfying. And the flavor is just strong enough that you can sense all its nuances across your 10,000 taste buds, but not so strong that it’s uncomfortable. It’s an incredible experience—and too often, a hard one to come by.</p>
                    <button
                        style={{
                            border: '2px solid black',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            color: 'black',
                            fontSize: '16px',
                            marginTop: '20px',
                        }}
                    >
                        <b>LEARN MORE</b>
                    </button>
                </div>
                <div style={{ flex: '1', textAlign: 'center', position: 'relative' }}>
                    <img
                        src={rightImage}
                        alt="Right Image"
                        style={{
                            width: '80%',
                            height: 'auto',
                            boxShadow: '40px 40px 0 #84AEC1',
                        }}
                    />
                    <img
                        className="animation2"
                        src={spinningLogo}
                        alt="Second Image"
                        style={{
                            position: 'absolute',
                            top: '-90px',
                            right: '10px',
                            width: '20%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Section7;
