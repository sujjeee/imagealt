import React from 'react'
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Hero = ({ onImageData }) => {
    const [files, setFiles] = useState('');
    // const [altText, setAltText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const uploader = Uploader({ apiKey: process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT });

    const handleUploadComplete = async (files) => {
        // const fileUrls = files.map(x => x.fileUrl).join(',');
        setShowModal(true);

        try {
            const fileUrls = files.map(x => x.fileUrl).join(',');
            const response = await axios.post(`/api/generate?imageUrl=${fileUrls}`);

            if (response.status === 200) {
                setTimeout(() => {
                    setShowModal(false);
                }, 3000);

                setFiles(files.map(x => x.fileUrl).join("\n"));

                onImageData({
                    altText: response.data,
                    files: files[0].originalFile.fileUrl
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient py-16 ' >
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
            <div className='flex items-center justify-between max-w-6xl mt-10 '>
                <div
                    className="text-base sm:text-lg px-7 sm:px-10 py-3 sm:py-4 text-white bg-blue-600 tracking-wide rounded-xl w-full font-medium hover:bg-blue-900 shadow-xl"

                >
                    <UploadButton uploader={uploader}
                        options={{ multi: true }}
                        // onUpdate={files => setFiles(files.map(x => x.fileUrl).join("\n"))}
                        onComplete={handleUploadComplete}>
                        {({ onClick }) =>
                            <button onClick={onClick}>
                                Upload a image...
                            </button>
                        }
                    </UploadButton>
                </div>
            </div>
            {showModal && (
                <div className='fixed inset-0 flex justify-center items-center top-0 left-0 backdrop-blur-lg z-50'>
                    <Modal />
                </div>
            )}
        </div >
    )
}

export default Hero