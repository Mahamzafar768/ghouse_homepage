import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row justify-between px-10 relative bg-[url('/ghousebg.jpeg')] bg-cover bg-top bg-no-repeat bg-fixed z-10 inset-0 opacity-90 h-[80vh] lg:h-[87vh]">
                <div className="py-[100px] w-full lg:w-[50%]">
                    <h1 className="text-[#044E83] text-4xl lg:text-6xl font-bold">Governor Sindh</h1>
                    <h4 className="text-[#044E83] text-2xl lg:text-4xl">Kamran Khan Tessori</h4>
                    <h2 className="text-[#2EB6E8] font-bold text-3xl lg:text-4xl">Certified Cloud
                        <br />
                        Applied Generative AI
                        <br />
                        Engineer (GenEng)</h2>
                    <h5 className="text-[#044E83] font-bold text-xl lg:text-2xl">Earn up to $5,000 / month</h5>

                    <h5 className="text-[#044E83] font-bold text-xl lg:text-2xl my-4">Now admissions are open in <br /> Hyderabad</h5>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-[90px]">
                        <button className="w-[200px] h-[50px] bg-[#044E83] text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                            APPLY NOW
                        </button>
                        <div>
                            <h2 className="text-center text-[#044E83] text-3xl font-bold">562,143</h2>
                            <p className="text-[#044E83] font-bold">Accepted Applications</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <Image src={"/governor.png"} alt="Governor" width={2000}
                        height={840} className="py-[70px] mx-auto lg:ml-[110px]" />
                </div>
            </div>
        </>
    );
}
