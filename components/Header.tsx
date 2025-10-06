import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container flex justify-between items-center px-6 py-4 text-gray-500">
                <Link href={"/"}>
                    <Image src="/assets/icons/logo.svg" alt="value investing" width={140} height={70} />
                </Link>
                {/* Nav items*/}
                <nav className="hidden sm:block">
                <NavItems />
                </nav>
                {/* Dropdown */}
                <UserDropdown/>
            </div>
        </header>
    )
}
export default Header
