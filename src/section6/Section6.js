import React from 'react';
import section6Image from '../assets/fresh ground/Screen Shot 2021-08-03 at 6.12.52 PM.png';

const Section6 = () => {
    return (
        <div style={{ backgroundColor: '#EFF5F7', padding: '40px 20px', position: 'relative' }}>
            <h2 style={{ color: '#00000014', opacity: '100%', textAlign: 'center', fontSize: '90px' }}>FRESH GROUNDS. 01 FRESH GROUNDS</h2>
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img
                    src={section6Image}
                    alt="Section 6 Image"
                    style={{ width: '80%', height: 'auto', borderRadius: '15px' }}
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <p style={{ color: 'white', fontSize: '24px' }}>EPISODE 01: <b>THE GREAT MIGRATION</b></p>
                    <p style={{ color: 'white', fontSize: '24px' }}><b>FRESH GROUNDS</b></p>
                    <p style={{ color: 'white', fontSize: '24px' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. </p>
                </div>
                <button
                    style={{
                        position: 'absolute',
                        top: '65%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                    }}
                >
                    <span style={{ color: 'white', marginRight: '5px' }}>▶</span> WATCH FILM
                </button>
            </div>
        </div>
    );
};

export default Section6;
