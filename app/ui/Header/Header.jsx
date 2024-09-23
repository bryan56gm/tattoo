// 'use client';

// // Next
// import Link from 'next/link';
// // Styles
// import styles from './header.module.scss';
// // Components
// import NavLinks from './NavLinks';
// import ToggleMenu from './ToggleMenu';
// import { useState } from 'react';


// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(prevState => !prevState);
//     };

//     return(
//         <header className={styles.header}>
//             <div className={styles.header__box}>
//                 <div className={`container ${styles.header__container}`}>
//                     <Link href="/">
//                         <img src="/assets/icons/logo.svg" alt="Logo" className={styles.header__logo}/>
//                     </Link>
                    
//                     <ToggleMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
//                 </div>
//             </div>
//             <NavLinks isMenuOpen={isMenuOpen} />
//         </header>
//     )
// }

'use client';

// Next
import Link from 'next/link';
// Styles
import styles from './header.module.scss';
// Components
import NavLinks from './NavLinks';
import ToggleMenu from './ToggleMenu';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null); // Usamos useRef para apuntar al header

    const toggleMenu = () => {
        // setIsMenuOpen(prevState => !prevState); //IMPORTANTE!!!!!! Mejor que !isMenuOpen
        setIsMenuOpen(!isMenuOpen);

    };

    // Cerrar el menú si clicas fuera del header o el toggle
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Cierra el menú
            }
        };

        // Agregar el event listener al documento para detectar clics
        document.addEventListener('click', handleClickOutside);

        // Eliminar el listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.header__box}>
                <div className={`container ${styles.header__container}`}>
                    <Link href="/">
                        <img src="/assets/icons/logo.svg" alt="Logo" className={styles.header__logo} />
                    </Link>

                    <ToggleMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
            <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
}
