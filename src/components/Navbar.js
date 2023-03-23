import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

const Navbar = () => {

    return (
        <nav className="flex px-4 items-center max-w-6xl mx-auto justify-between py-2 sm:py-4 relative text-white">
            <div className="md:py-2 py-1 cursor-pointer text-xl sm:text-2xl  font-bold tracking-wider text-white ">
                <Link href="/">
                    <span className='hover:bg-gradient-to-r from-[#ff0080] via-[#8e2de2] to-[#4a00e0] hover:text-transparent hover:bg-clip-text'>
                        ImageAlt
                    </span>
                </Link>
            </div>
            <div className='flex font-semibold  tracking-wide items-center gap-5'>
                <div className='sm:hidden flex gap-3'>
                    <Link
                        href="https://twitter.com/sujjeeee"
                        target="_blank">
                        <AiOutlineTwitter size={25} />
                    </Link>
                    <Link
                        href="https://github.com/sujjeee/imagealt"
                        target="_blank">
                        <AiFillGithub size={25} />
                    </Link>
                </div>
                <Link
                    className="hidden sm:flex p-0.5 rounded-full bg-gradient-to-r from-[#4a00e0] via-[#8e2de2] to-[#ff0080]"
                    href="https://github.com/sujjeee/imagealt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-1.5 text-sm text-black shadow-md transition-colors hover:border-ga-800">
                        <AiFillGithub size={20} />
                        <p>Star on GitHub</p>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar