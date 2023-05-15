import React, { useEffect } from "react";
import img1 from '../assets/coffe made for your life/Screen Shot 2021-07-30 at 3.12.17 PM.png';
import img2 from '../assets/coffe made for your life/7018-BS-GR_8.png';
import img3 from '../assets/coffe made for your life/Mask Group 23.png';
import img4 from '../assets/coffe made for your life/Screen Shot 2021-07-30 at 3.10.15 PM.png';
import img5 from '../assets/coffe made for your life/Mask Group 20.png';
import img6 from '../assets/coffe made for your life/Screen Shot 2021-07-30 at 3.12.44 PM.png';

const Section2 = () => {
    useEffect(() => {
        window.addEventListener("scroll", parallaxEffect);
        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        };
    }, []);

    const parallaxEffect = () => {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = document.getElementsByClassName("parallax");
        for (let i = 0; i < parallaxElements.length; i++) {
            const element = parallaxElements[i];
            const distance = (scrollPosition * element.dataset.speed) / 10;
            element.style.transform = `translateX(${distance}px)`;
        }
    };

    return (
        <div style={styles.section}>
            <div style={styles.content}>
                <h3 style={styles.text}>DESIGNED FOR REAL LIFE</h3>
                <h1 style={styles.text}>COFFEE MADE FOR YOUR LIFE ON THE GO.</h1>
                <p style={styles.text2}>
                    We understand coffee is a big part of your busy, active life. That’s
                    why we create and develop products that allow you to bring your
                    passion for <b>coffee-when you want it-</b> and wherever life takes
                    you.
                </p>
            </div>
            <img src={img1} style={{ ...styles.image, ...styles.image1 }} className="parallax" alt="img1" data-speed="1" />
            <img src={img2} style={{ ...styles.image, ...styles.image2 }} className="parallax" alt="img2" data-speed="1" />
            <img src={img3} style={{ ...styles.image, ...styles.image3 }} className="parallax" alt="img3" data-speed="1" />
            <img src={img4} style={{ ...styles.image, ...styles.image4 }} className="parallax" alt="img4" data-speed="1" />
            <img src={img5} style={{ ...styles.image, ...styles.image5 }} className="parallax" alt="img5" data-speed="1" />
            <img src={img6} style={{ ...styles.image, ...styles.image6 }} className="parallax" alt="img6" data-speed="1" />
            <div style={{
                borderLeft: "2px dotted #659AB1",
                height: "650px",
                width: "200px",
                position: 'absolute',
                left: '50%',
                top: '300px',
            }}></div>
        </div>
    );
};

const styles = {
    section: {
        height: "850px",
        backgroundColor: "#F3F7F9",
        display: "flex",
        justifyContent: "center",
        position: 'relative',
    },
    content: {
        textAlign: "center",
    },
    text: {
        fontWeight: "bold",
        maxWidth: "400px",
    },
    text2: {
        maxWidth: "400px",
    },
    image: {    position: 'absolute',
        top: 0,
        left: 0,
    },
    image1: {
        top: '110px',
        left: '75px',
    },
    image2: {
        top: '500px',
        left: '75px',
    },
    image3: {
        top: '400px',
        left: '400px',
    },
    image4: {
        top: '400px',
        left: '1140px',
    },
    image5: {
        top: '150px',
        left: '1300px',
    },
    image6: {
        top: '40px',
        left: '1500px',
    },
    dots:{
    }
};

export default Section2;

