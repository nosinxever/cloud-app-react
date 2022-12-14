import React from 'react'


import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
            <dir className='max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'> Solution</h6>
                    <p className='py-1'>Marketing</p>
                    <p className='py-1'>Marketing</p>
                    <p className='py-1'>Marketing</p>
                    <p className='py-1'>Marketing</p>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'> Support</h6>
                    <p className='py-1'>Pricing</p>
                    <p className='py-1'>Guides</p>
                    <p className='py-1'>Guides</p>
                    <p className='py-1'>API Status</p>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'> Company</h6>
                    <p className='py-1'>About</p>
                    <p className='py-1'>Blog</p>
                    <p className='py-1'>Jobs</p>
                    <p className='py-1'>Press</p>
                    <p className='py-1'>Partners</p>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'> Legal</h6>
                    <p className='py-1'>Claims</p>
                    <p className='py-1'>Privacy</p>
                    <p className='py-1'>Terms</p>
                    <p className='py-1'>Policies</p>
                    <p className='py-1'>Conditions</p>

                </div>

                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row '>
                        <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='enter email ..' />
                        <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                    </form>
                </div>


            </dir>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between text-center text-gray-600 sm:flex-row'>
                <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
                <div className=' flex justify-between  sm:w-[300px] pt-4 text-2xl '>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaTwitch />
                    <FaGithub />
                </div>
            </div>




        </div>
    )
}

export default Footer