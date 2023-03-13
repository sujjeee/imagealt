
import Image from 'next/image'
import React from 'react'

const Output = ({ data }) => {
    return (
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="flex flex-col space-y-10 mt-4 mb-16">
                <div className="flex sm:space-x-8 sm:flex-row flex-col">
                    <div>
                        <h3 className="mb-1 font-medium text-lg text-center text-white w-full">Uploaded Image</h3>
                        <Image
                            alt="Your uploaded image"
                            src={!data.files ? "/example.webp" : data.files}
                            className="w-full object-cover h-96 rounded-2xl"
                            width={475}
                            height={475}
                        />
                    </div>
                    <div className="sm:mt-0 mt-8 w-full md:w-[500px]">
                        <h3 className="mb-1 font-medium text-center text-lg text-white ">Image Alt Text </h3>
                        <textarea
                            readOnly
                            value={!data.altText ? "a person's hand reaching out of the water" : data.altText}
                            className="w-full text-xl font-mono text-gray-100 object-cover h-96 rounded-2xl sm:mt-0 mt-2 border border-gray-300 p-6 bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Output