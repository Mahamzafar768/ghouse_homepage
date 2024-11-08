import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items- bg-[#044E83] relative'>
        <div className='flex items-center space-x-5 absolute top-8'>
            <Image src={'/logo.png'} alt='ghouse'width={100} height={100}></Image>
            <h1>Tuition Free Education Program On Latest Technologies</h1>
        </div>
        <div>
            <nav>
                <ul className='flex space-x-8 items-center'>
                    <li><Link href={''}>Home</Link></li>
                    <li><Link href={''}>Apply</Link></li>
                    <li><Link href={''}>Jobs</Link></li>
                    <li><Link href={''}>Result</Link></li>
                    <li><Link href={''}>Courses</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar