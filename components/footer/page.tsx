import Link from "next/link"
import React from "react"

export default function Footer(){
    return(
        <div>
           <div className="flex justify-between px-[90px] py-[90px] bg-[#F4F4F5]">
            <div>
                <h1 className="text-2xl">Core Courses</h1>
                <ul className="py-[14px]">
                <li  className="py-[4px]"><Link href={"/"}>Programming Fundamentals</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Web2 Using NextJS</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Earn as You Learn</Link></li>
                </ul>
            </div>
            <div>
            <h1 className="text-2xl">Advanced Courses</h1>
                <ul  className="py-[14px]">
                <li  className="py-[4px]"><Link href={"/"}>Web 3 and Metaverse</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Cloud-Native Computing</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Artificial Intelligence (AI) and Deep Learning</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Ambient Computing and IoT</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Genomics and Bioinformatics</Link></li>
                <li  className="py-[4px]"><Link href={"/"}>Network Programmability and Automation</Link></li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl py[14px]">Social Links</h1>
                
                <Link href={"/"} className="py-[4px]">education@governorsindh.com</Link>
                
            </div>
            </div>
        </div>
    )
}