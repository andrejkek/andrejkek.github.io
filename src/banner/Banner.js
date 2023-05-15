import React from 'react';

const Banner = () => {
    return (
        <div style={styles.banner}>
            <span style={styles.text}>FREE SHIPPING ON ALL U.S. ORDERS $49+</span>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: '#8DB9CA',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        margin: 0, // Remove margin
        overflowX: 'hidden', // Hide horizontal overflow
    },
    text: {
        color: 'white',
        fontFamily: 'Josefin Sans',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default Banner;
