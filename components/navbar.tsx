'use client';

import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';

const navItems = {
    '/about': {
        name: 'about',
    },
    '/blog': {
        name: 'blog',
    },
};

function Navbar() {
    // use this line of code to check if the current param matches the route
    // let pathname = usePathname();
    return (
        <nav className="flex justify-between">
            <Logo />
            <ul className="flex">
                {Object.entries(navItems).map(([path, { name }]) => {
                    // const isActive = path === pathname;
                    return (
                        <li key={path}>
                            <Link href={path}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
