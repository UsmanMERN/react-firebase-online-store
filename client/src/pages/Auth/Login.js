import React from 'react'
import { LoginBG } from "../../assets"
export default function Login() {
    return (
        <div style={{ background: `url(${LoginBG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className='h-screen w-screen flex items-center justify-center'>
            <div className="w-ful lg:w-96 px-4 py-6 rounded-md drop-blur-md flex items-center justify-center flex-col">
                <p className='text-2xl text-dark'>welcome Back....!</p>
                <p className='text-lg text-gray'>Sign in to access your store </p>
            </div>
        </div>
    )
}
