import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/make every cup an experience/5116C-18WT_12.png";
import image1 from "../assets/make every cup an experience/Screen Shot 2021-07-30 at 3.10.15 PM.png";
import image2 from "../assets/make every cup an experience/Screen Shot 2021-08-03 at 12.59.35 PM.png";
import image3 from "../assets/make every cup an experience/Group 26.png";
import image4 from "../assets/make every cup an experience/Screen Shot 2021-08-03 at 1.11.04 PM.png";

const Section4 = () => {
    const images = [image1, image2, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <div
                    style={{
                        ...styles.backgroundImage,
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                >
                    <div style={styles.text}>
                        <p style={styles.bld}>MAKE EVERY CUP AN EXPERIENCE.</p>
                        <p style={styles.parag}>
                            Have your French pressed coffee anywhere with ESPRO’s Travel
                            Press. A double micro-filter eliminates grit for your smoothest
                            cup on the go, and the mug fits right in a car cup holder or
                            bike’s water bottle cage.
                        </p>
                        <button style={styles.button}>SHOP TRAVEL PRESS</button>
                    </div>
                </div>
            </div>
            <div style={styles.rightSection}>
                <h2 style={styles.heading}>PRESS. SIP. ENJOY.</h2>
                <img
                    src={images[currentImageIndex]}
                    alt="Rotating Image"
                    style={styles.rotatingImage}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
    },
    leftSection: {
        flex: 1,
        position: "relative",
    },
    backgroundImage: {
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    text: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "#FFFFFF",
    },
    button: {
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "10px 20px",
        color: "black",
        fontWeight: "bold",
        marginTop: "20px",
    },
    rightSection: {
        flex: 1,
        backgroundColor: "#8DB9CA",
        padding: "40px",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: "110px",
        fontWeight: "bold",
        position: "absolute",
        opacity: "15%",
        bottom: "-90px",
    },
    paragraph: {
        fontSize: "16px",
    },
        parag: {
            color: "white",
            maxWidth: "600px",
        },
        bld: {
            fontWeight: "bold",
            fontSize: "25px",
        },
        rotatingImage: {
            width: "600px",
            height: "600px",
        },
    };

    export default Section4;
