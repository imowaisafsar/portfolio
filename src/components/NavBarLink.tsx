import React from 'react';
import Link from 'next/link';
import { INavBarLinkModel } from '../../core/interfaces/INavBarLinkModel';
import { useRouter } from 'next/router';

interface NavBarLinkProps extends INavBarLinkModel { }
interface NavBarMobileLinkProps extends INavBarLinkModel {
    toggle: () => void;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ href, title, className }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            ></span>
        </Link>
    );
};

export const NavBarMobileLink: React.FC<NavBarMobileLinkProps> = ({ href, title, className, toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            ></span>
        </button>
    );
};

export default NavBarLink;
