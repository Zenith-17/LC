import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaGoogle,FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
export default function SignIn(){
    return(
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <main className='flex flex-col items-center justify-center w-full felx-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl'>
                    {/* Signin section */}
                    <div className='w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <section className='inline-block text-green-500'>Company</section> Name
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to Account</h2>
                            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                            <div className='flex justify-center my-2'>
                                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaFacebookF className="text-sm"/>
                                </a>
                                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaLinkedinIn className="text-sm"/>
                                </a>
                                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                    <FaGoogle className="text-sm"/>
                                </a>
                                </div>
                                <p className='text-gray-400 my-3'>or use your email</p>
                            <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <FaRegEnvelope className="text-gray-400 m-2"/>
                                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-6'>
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                            </div>
                            <a href="#" className='border-2 border-green-500 text-green-500 rounded-3xl px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign In</a>
                            </div>
                        </div>
                    </div>

                    {/* SignUp section  */}
                    <div className='w-2/5 bg-green-500 text-white rounderd-tr-2xl  rounded-br-2xl py-36 px-12'>
                        <h2 className='text-3xl font-bold mb-2'>Hi there!</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <p className='mb-10'>Fill up the information below and start coding</p>
                        <a href="/signup" className='border-2 border-white rounded-3xl px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign Up</a>
                    </div>
                </div>
            </main>
        </div>
    )
}