import React from "react";
import Link from "next/link";

const LinkButtonPrimary = ({children, addClass, href}) => {
    return (
        <Link
            href={href}

        >
            <a className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-success-500 hover:shadow-success-md transition-all outline-none " +
                addClass
            }>
                {children}
            </a>
        </Link>
    );
};

export default LinkButtonPrimary;
