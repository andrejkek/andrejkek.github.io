import React, { useState } from "react";
import esprologo from "../assets/esproLogo.svg";
import arrowdown from "../assets/arrow-ios-downward-fill.svg";
import search from "../assets/search-line.svg";
import acc from "../assets/My Account icon.svg";
import shopBag from "../assets/Shopping bag icon.svg";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (event, itemId) => {
        event.preventDefault();
        setActiveDropdown(activeDropdown === itemId ? null : itemId);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <nav style={styles.navbar}>
            <ul style={styles.navbarList}>
                <li style={styles.navbarItem}>
                    <a href="/shop" style={{ ...styles.boldText, ...styles.navbarLink }} onClick={(event) => toggleDropdown(event, 1)}>

                    SHOP
                        {activeDropdown === 1 ? <a href="/home" style={styles.navbarLink}>
                                <img src={arrowdown} alt="arrowup" style={styles.arrowFlip} />
                            </a> :
                            <a href="/home" style={styles.navbarLink}>
                                <img src={arrowdown} alt="arrowdown" />
                            </a>}
                    </a>
                    {activeDropdown === 1 && (
                        <ul style={styles.dropdownList} onMouseLeave={closeDropdown}>
                            <li style={styles.dropdownItem}>
                                <a href="/item1" style={{ ...styles.boldText, ...styles, ...styles.removeDeco }}>Item 1</a>
                            </li>
                            <li style={styles.dropdownItem}>
                                <a href="/item2" style={{ ...styles.boldText, ...styles.dropdownLink, ...styles.removeDeco }}>Item 2</a>
                            </li>
                            <li style={styles.dropdownItem}>
                                <a href="/item3" style={{ ...styles.boldText, ...styles.dropdownLink, ...styles.removeDeco }}>Item 3</a>
                            </li>
                        </ul>
                    )}
                </li>
                <li style={styles.navbarItem}>
                    <a href="/our_story" style={{ ...styles.boldText, ...styles.navbarLink }}>OUR STORY</a>
                </li>
                <li style={styles.navbarItem}>
                    <a href="/home" style={styles.navbarLink}>
                        <img src={esprologo} alt="espro logo" />
                    </a>
                </li>

                <li style={styles.navbarItem}>
                    <a href="/brew_guides" style={{ ...styles.boldText, ...styles.navbarLink }}>BREW GUIDES</a>
                </li>
                <li style={styles.navbarItem}>
                    <a href="/blog" style={{ ...styles.boldText, ...styles.navbarLink }}>BLOG</a>
                </li>
                <li style={styles.navbarItem}>
                    <a href="/placeholder" style={styles.navbarLink}><img src={search} alt="search" /> <img src={acc} alt="my account" /> <img src={shopBag} alt="shopping bag" /></a>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#fff',
        padding: '10px',
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
    navbarList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    navbarItem: {
        marginLeft: '10px',
        position: 'relative',
    },
    navbarLink: {
        textDecoration: 'none',
        color: '#333',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
    dropdownList: {
        listStyle: 'none',

        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        zIndex: 2, // Ensure the dropdown is displayed above other elements
    },
    dropdownItem: {
        // Dropdown item styles
        // ...
    },
    dropdownLink: {
        // Dropdown link styles
        // ...
    },
    arrowFlip: {
        transform: 'rotate(180deg)',
    },
    boldText: {
        fontWeight: 'bold',
    },
    removeDeco: {
        textDecoration: 'none',
        color: 'black',
    }

};

export default Navbar;
