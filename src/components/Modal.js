import React from 'react'

const Modal = () => {
    return (
        < >
            <div className='absolute'>
                <div className=" py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-20 relative border-2 border-gray-200 font-faber">

                            <div className="mb-4 sm:mb-8 ">
                                <h2 className="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center tracking-wider py-4">Loading...</h2>
                                <p className="text-gray-500 text-center">
                                    Please wait for 5-10 seconds for alternative text to be generated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal