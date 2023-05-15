import React from "react";
import cardImage1 from '../assets/explore our products/1232C_7.png';
import cardImage2 from '../assets/explore our products/7018-BS-GR_7.png';
import cardImage3 from '../assets/explore our products/Image_14.png';

const Section3 = () => {
    return (
        <div style={styles.section}>
            <div>
                <h2 style={styles.text}>EXPLORE OUR PRODUCTS</h2>
            </div>
            <div style={styles.container}>
                <div style={{ ...styles.card, backgroundImage: `url(${cardImage1})` }}>
                    <div style={styles.cardContent}>
                        <h4 style={styles.cardText}>FRENCH PRESS</h4>
                    </div>
                </div>
                <div style={{ ...styles.card, backgroundImage: `url(${cardImage2})` }}>
                    <div style={styles.cardContent}>
                        <h4 style={styles.cardText}>POUR OVER</h4>
                    </div>
                </div>
                <div style={{ ...styles.card, backgroundImage: `url(${cardImage3})` }}>
                    <div style={styles.cardContent}>
                        <h4 style={styles.cardText}>COLD BREW</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    section: {
        backgroundColor: "#FFFFFF",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
    },
    text: {
        color: "#000000",
        fontWeight: "bold",
        fontFamily: "Barlow Condensed, sans-serif",
        fontSize: "24px",
    },
    image: {
        width: '30%',
    },
    container: {
        display: "flex",
        justifyContent: 'space-between',
        maxWidth: "1100px",
    },
    card: {
        width: "500px",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "8px",
    },
    cardContent: {
        padding: "16px",
    },
    cardText: {
        margin: "0",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
    },
};

export default Section3;
