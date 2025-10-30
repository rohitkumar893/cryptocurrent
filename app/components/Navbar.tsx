"use client"
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className="border-b-3 bg-[#171717] font-semibold text-lg border-b-gray-700 h-18 w-full sticky top-0 flex justify-between items-center px-6">
            <Link href="/" className='text-orange-200 text-xl'>Cryptocurrent</Link>
            <Link href="about" className='text-blue-200 text-xl'>About</Link>
        </div>
    )
}