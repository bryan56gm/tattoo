// 'use client';
// // Styles
// import styles from './nav.module.scss';
// // Next
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// // Generator ID
// import { nanoid as id } from 'nanoid';

// const links = [
//     { name: 'About', href: '/about' },
//     { name: 'Tattoos', href: '/tattoos' },
//     { name: 'Clothes', href: '/clothes' },
// ];

// export default function NavLinks({ isMenuOpen }) {
//     const pathname = usePathname();

//     return (
//         <nav
//             className={`
//                 ${styles.nav}
//                 ${ isMenuOpen ? styles.nav__show : '' }
//             `}  
//         >
//             <ul className={ styles.nav__menu }> 
//                 {links.map((link) => (
//                     <li key={ id() }>
//                         <Link 
//                             href={ link.href }
//                             className={`
//                                 ${ styles.nav__link }
//                                 ${ pathname === link.href ? styles.nav__active : '' }
//                             `}
//                         >
//                             { link.name }
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

'use client';
// Styles
import styles from './nav.module.scss';
// Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Generator ID
import { nanoid as id } from 'nanoid';

const links = [
    { name: 'About', href: '/about' },
    { name: 'Tattoos', href: '/tattoos' },
    { name: 'Clothes', href: '/clothes' },
];

export default function NavLinks({ isMenuOpen, toggleMenu }) {
    const pathname = usePathname();

    return (
        <nav className={`${styles.nav} ${isMenuOpen ? styles.nav__show : ''}`}>
            <ul className={styles.nav__menu}>
                {links.map((link) => (
                    <li key={id()}>
                        <Link
                            href={link.href}
                            className={`${styles.nav__link} ${pathname === link.href ? styles.nav__active : ''}`}
                            onClick={toggleMenu} // Cierra el menú al hacer clic en el enlace
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}