import React, { useEffect } from "react";
import parallaxImage from "../assets/coffe made for your life/7018-BS-GR_8.png";

const ParallaxImage = () => {
    useEffect(() => {
        const image = document.getElementById("parallax-image");

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            image.style.transform = `translateX(${scrollTop * 0.5}px)`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ height: "500px", position: "relative" }}>
            <img
                id="parallax-image"
                src={parallaxImage}
                alt="Parallax Image"
                style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
            />
        </div>
    );
};

export default ParallaxImage;
