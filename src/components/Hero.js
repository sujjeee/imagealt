import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient pt-16 ' >
            <h1 className="mx-auto  max-w-[320px] sm:max-w-3xl text-4xl font-extrabold  text-gray-300 sm:text-7xl tracking-normal">
                Generate  {" "}
                <span className="relative whitespace-nowrap text-blue-600">
                    <span className="relative bg-gradient-to-r from-[#ff0080] via-[#8e2de2] to-[#4a00e0] inline-block text-transparent bg-clip-text">Alt Text</span>
                </span>{" "}
                for any Image.
            </h1>
            <h2 className="mx-auto mt-12 max-w-[320px] sm:max-w-3xl text-base sm:text-lg sm:text-gray-400  text-gray-500 ">
                Create alt text for any image in a few clicks with this free and open-source tool. Improve the accessibility and SEO of your content with this simple and effective tool!
            </h2>
        </div >
    )
}

export default Hero