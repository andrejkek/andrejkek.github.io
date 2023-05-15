import React from 'react';
import instagramIcon from '../assets/show us your best pour/Icon awesome-instagram.svg';
import image1 from '../assets/insta photos/Screen Shot 2021-08-03 at 1.02.18 PM.png';
import image2 from '../assets/insta photos/Screen Shot 2021-08-03 at 1.13.05 PM.png';
import image3 from '../assets/insta photos/Screen Shot 2021-08-03 at 12.59.47 PM.png';
import image4 from '../assets/insta photos/Screen Shot 2021-08-03 at 1.11.04 PM.png';
import image5 from '../assets/insta photos/Screen Shot 2021-08-03 at 1.06.49 PM.png';
import image6 from '../assets/insta photos/Screen Shot 2021-08-03 at 12.59.35 PM.png'

const Section8 = () => {
    return (
        <div style={{ backgroundColor: '#EFF5F7', padding: '40px 20px', position: 'relative', height: '600px' }}>
            <div style={{ flex: '1', maxWidth: '300px' }}>
                <h1>SHOW US YOUR BEST POUR.</h1>
                <p>Making coffee better — one cup at a time. Share your best moments with us #ESPRO</p>
            </div>
            <div style={{ position: 'absolute', top: '0', right: '0', marginTop: '10px', marginRight: '10px' }}>
                <button
                    style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        letterSpacing: '2px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: '8px',
                    }}
                >
                    <img src={instagramIcon} alt="Instagram Icon" style={{ marginRight: '5px', padding: '2px' }} />
                    <span style={{ padding: '5px' }}>FOLLOW US ON INSTAGRAM</span>
                </button>
            </div>
            <img src={image1} alt="Image 1" className="parallax-image" style={{ top: '250px', left: '50px', position: 'absolute' }} />
            <img src={image2} alt="Image 2" className="parallax-image" style={{ top: '350px', left: '350px', position: 'absolute' }} />
            <img src={image3} alt="Image 3" className="parallax-image" style={{ top: '250px', left: '650px', position: 'absolute' }} />
            <img src={image4} alt="Image 4" className="parallax-image" style={{ top: '350px', left: '950px', position: 'absolute' }} />
            <img src={image5} alt="Image 5" className="parallax-image" style={{ top: '250px', left: '1250px', position: 'absolute' }} />
            <img src={image6} alt="Image 5" className="parallax-image" style={{ top: '350px', left: '1550px', position: 'absolute' }} />
        </div>
    );
};

export default Section8;
