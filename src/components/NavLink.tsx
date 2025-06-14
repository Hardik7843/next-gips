'use client';

import Link from "next/link";


const NavLink = ({ name, path }: { name: string, path: string }) =>
{
    return (
        <li>
            <Link
                href={path}
                className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
            >
                {name}
            </Link>
        </li>
    );
};

export default NavLink;