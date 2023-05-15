import React, { useState } from 'react';
import review1 from '../assets/reviews/past_logo.svg';
import review2 from '../assets/reviews/homegrounds_logo.png';
import review3 from '../assets/reviews/martha_stewart_logo.png';
import review4 from '../assets/reviews/buzzfeed_logo.png';
import review5 from '../assets/reviews/fastcompany_logo.png';

const Section5 = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const images = [
        {
            image: review1,
            text: 'Review from Brand 1',
        },
        {
            image: review2,
            text: 'Review from Brand 2',
        },
        {
            image: review3,
            text: '“The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”',
        },
        {
            image: review4,
            text: 'Review from Brand 4',
        },
        {
            image: review5,
            text: 'Review from Brand 5',
        },
    ];

    const handleClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div style={{ backgroundColor: 'white', height: '300px' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Nunito' }}>IN THE PRESS</h2>
                {selectedImageIndex !== null ? (
                    <p style={{ fontFamily: 'Nunito', maxWidth: '700px', margin: '0 auto' }}>{images[selectedImageIndex].text}</p>
                ) : (
                    <p style={{ fontFamily: 'Nunito', maxWidth: '700px', margin: '0 auto' }}>
                        "The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom.
                        The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping."
                    </p>
                )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        style={{ width: 'auto', height: 'auto', cursor: 'pointer' }}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section5;
