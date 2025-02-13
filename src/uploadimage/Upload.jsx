import React, { useState } from 'react'
import { TbCloudUpload } from "react-icons/tb";

const Upload = () => {
    const [loading,setLoading]=useState(false)
    const handleFileUpload = async(event) => {
        // Handle file upload logic here
        const file = event.target.files[0];
        if(!file) return
        setLoading(true)
        const data=new FormData()
        data.append("file",file)
        data.append("upload_preset","cloudinary_upload")
        data.append("cloud_name","dgutt2eh6")

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dgutt2eh6/image/upload", {
                method: "POST",
                body: data,
            });

            const uploadedImageURL = await res.json();
            console.log(uploadedImageURL.url);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
        setLoading(false)
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center '>
        <div className='flex flex-col w-fit items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300'>
            <div className='flex flex-col items-center space-y-4'>
                {
                    loading? <span className='text-xl text-blue-950'>uploading...</span>: <TbCloudUpload className='text-6xl text-blue-950' />
                }
                
                <input 
                    type="file" 
                    className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-950 hover:file:bg-blue-100 cursor-pointer' 
                    onChange={handleFileUpload}
                />
            </div>
        </div>
        </div>
    )
}

export default Upload
