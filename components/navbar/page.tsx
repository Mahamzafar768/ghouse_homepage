import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center px-10 h-[80px] bg-[#044E83] text-white relative">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        width={90}
                        height={90}
                        alt="Logo"
                        className="rounded-md relative top-10  z-10"
                    />
                    <h3 className="ml-[90px] text-2xl text-[#B9D8F3] cursor-pointer font-bold">
                        Tuition Free Education Program on Latest Technologies
                    </h3>
                </div>
                <div>
                    <ul className="flex gap-8 text-lg text-[#BCEEF6]">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/component/apply"}>Apply</Link></li>
                        <li><Link href={""}>Jobs</Link></li>
                        <li><Link href={"/"}>Result</Link></li>
                        <li><Link href={"/"}>Courses</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
