'use client';

import { useState, useEffect } from 'react';
import styles from './toggle.module.scss';

export default function ToggleMenu({ isMenuOpen, toggleMenu }) {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    // useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         if (!e.target.closest(`.${styles.toggle}`)) {
    //             setIsMenuOpen(false);
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    return (
        <div 
            className={`${styles.toggle} ${isMenuOpen ? styles.toggle__cross : ''}`}
            onClick={toggleMenu}
        >
            <div className={styles.toggle__icon} />
        </div>
    );
}
