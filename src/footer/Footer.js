import React from 'react';

const Footer = () => {
    return (
        <div className='dotted-spaced' style={{ backgroundColor: '#659AB1', padding: '20px', color: '#FFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ maxWidth: '500px' }}>
                    <h1>NEVER MISS A DROP.</h1>
                    <p style={{ maxWidth: '500px' }}>
                        Sign up to be the first to know about exclusive new deals, product launches and more.
                    </p>
                </div>
                <div>
                    <form style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            style={{
                                marginTop: '20px',
                                width: '300px',
                                height: '40px',
                                fontSize: '16px',
                                padding: '0 25px',
                                backgroundColor: '#84AEC1',
                                color: '#FFF',
                                border: 'none',
                                borderRadius: '5px 0 0 5px',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                marginTop: '20px',
                                backgroundColor: '#84AEC1',
                                color: '#FFF',
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                borderRadius: '0 5px 5px 0',
                                border: 'none',
                            }}
                        >
                            SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
