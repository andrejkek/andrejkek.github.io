import React from 'react';
import logo from '../assets/whiteEsproLogo.svg';
import logo1 from '../assets/facebook.svg';
import logo2 from '../assets/instagram.svg';
import logo3 from '../assets/twitter.svg';

const Footer2 = () => {
    return (
        <div style={{ backgroundColor: '#659AB1', padding: '20px', color: '#FFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ width: 'auto', marginBottom: '10px' }} />
                    <p style={{ maxWidth: '200px' }}>We’re here to help. service@espro.com 1.844.377.7622</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>LEARN</h3>
                    <ul style={{ maxWidth: '200px', listStyleType: 'none', padding: '0' }}>
                        <li>Blog</li>
                        <li>Our story</li>
                        <li>Brew Guides</li>
                        <li>Reatilers</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>SUPPORT</h3>
                    <ul style={{ maxWidth: '200px', listStyleType: 'none', padding: '0' }}>
                        <li>FAQ</li>
                        <li>Shipping & returns</li>
                        <li>Our Guarantee</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>COMPANY</h3>
                    <ul style={{ maxWidth: '200px', listStyleType: 'none', padding: '0' }}>
                        <li>Contact</li>
                        <li>Join us</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>CONNECT WITH US</h3>
                    <div style={{display: 'flex'}}>
                        <div style={{backgroundColor: '#84AEC1', borderRadius: '50px', width: '45px', height: '45px',display: 'flex', justifyContent: 'center', padding: '5px'}}>
                        <img src={logo1} alt="Image 1" style={{ width: 'auto', height: 'auto' }} /></div>
                        <div style={{backgroundColor: '#84AEC1', borderRadius: '50px', width: '45px', height: '45px',display: 'flex', justifyContent: 'center', padding: '5px'}}>
                            <img src={logo3} alt="Image 2" style={{ width: 'auto', height: 'auto' }} /></div>
                        <div style={{backgroundColor: '#84AEC1', borderRadius: '50px', width: '45px', height: '45px',display: 'flex', justifyContent: 'center', padding: '5px'}}>
                            <img src={logo2} alt="Image 3" style={{ width: 'auto', height: 'auto' }} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer2;
