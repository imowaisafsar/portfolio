import React from 'react';
import Link from 'next/link';
import { INavBarLinkModel } from '../../core/interfaces/INavBarLinkModel';
import { useRouter } from 'next/router';

interface NavBarLinkProps extends INavBarLinkModel { }

const NavBarLink: React.FC<NavBarLinkProps> = ({ href, title, className }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'
                    }`}
            ></span>
        </Link>
    );
};

export default NavBarLink;
