import React from 'react';
import bg from '../assets/2132C2_6.png'; // Replace with the path to your local image
import arrowShort from '../assets/arrow-right-short.svg';
import './Section1.css';

const Section1 = () => {
    return (
        <div style={styles.section}>
            <div style={styles.overlay}>
                {/* Content of the section */}
                <h1 style={styles.title}>BREW ANYWHERE. BE ANYWHERE.</h1>
                <p style={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                <button style={styles.button}>POUR ON THE GO</button>
                <span style={styles.exploreText} className="animation">EXPLORE <img src={arrowShort} alt="arrowshort" /></span>
            </div>
        </div>
    );
};

const styles = {
    section: {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        padding: '40px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    description: {
        fontSize: '18px',
        marginBottom: '20px',
        textAlign: 'center',
        whiteSpace: 'pre-line',
        maxWidth: '600px',
        fontFamily: 'Nunito',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#fff', // Changed background color to white
        color: '#000', // Changed text color to black
        border: 'none',
        borderRadius: '20px', // Smoothed edges with larger border radius
        cursor: 'pointer',
        letterSpacing: '0.5px',
        fontWeight: 'bold',
    },
    exploreText: {
        position: 'absolute',
        bottom: '-60px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
};

export default Section1;