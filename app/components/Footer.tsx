import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white w-11/12 mx-auto'>
            <div className='flex items-center justify-between w-full pt-14 pb-16 px-10'>
                <div className='flex justify-between w-1/2'>
                    <div className='flex flex-col gap-2'>
                        <h2>Humuproperties</h2>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2>Humuproperties</h2>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2>Humuproperties</h2>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                        <p>Loremipsum</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[#120B59] font-normal leading-[34.68px] text-2xl'>Social media</h2>
                    <div className='flex items-center gap-4 mt-3'>
                        <div className='relative h-5 w-5'>
                            <Image src="/images/instagram.png" className='cursor-pointer' fill alt="hands-up" />
                        </div>
                        <div className='relative h-5 w-5'>
                            <Image src="/images/twitter.png" className='cursor-pointer' fill alt="hands-up" />
                        </div>
                        <div className='relative h-5 w-5'>
                            <Image src="/images/facebook.png" className='cursor-pointer' fill alt="hands-up" />
                        </div>
                        <div className='relative h-5 w-5'>
                            <Image src="/images/tiktok.png" className='cursor-pointer' fill alt="hands-up" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer