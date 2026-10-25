import React from 'react'
import himachal from '../../../assets/himachal.jpg'
import kerela from '../../../assets/kerela.jpg'
import rajesthan from '../../../assets/rajesthan.jpg'
import europe from '../../../assets/europe.jpg'
import { ArrowRight } from 'lucide-react'

const OurPackages = () => {
  return (
    <>
    <div className='p-4'>
        <div className='text-gray-500 text-center '>OUR PACKAGES</div>
        <div className='text-4xl font-bold text-center mt-2'>Browse Our <span className='text-blue-600'>Travel Packages</span></div>
        <div className='text-gray-500 text-center mt-2'>Handpicked packages for an amazing travel experience.</div>
        <div className='flex gap-5 mt-3 '>
            <div className='border border-gray-400  rounded-2xl'>
                <img src={himachal} alt="" className='w-80 h-40 rounded-2xl'/>
                <div className='p-2'>
                    <div className='text-xl font-bold'>Himachal Tour</div>
                    <div className='text-gray-500'>5 Days/4 Nights</div>
                    <div className=' flex justify-between text-xl font-bold text-blue-600 '>
                        <div>
                            <div>₹12,999</div>
                        </div>
                        
                        <div>
                            <button className='size-7 rounded-4xl bg-blue-200 active:scale-95'><ArrowRight/></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border border-gray-400  rounded-2xl'>
                <img src={kerela} alt="" className='w-80 h-40 rounded-2xl'/>
                <div className='p-2'>
                    <div className='text-xl font-bold'>Kerela Tour</div>
                    <div className='text-gray-500'>4 Days/3 Nights</div>
                    <div className=' flex justify-between text-xl font-bold text-blue-600 '>
                        <div>
                            <div>₹14,999</div>
                        </div>
                        
                        <div>
                            <button className='size-7 rounded-4xl bg-blue-200 active:scale-95'><ArrowRight/></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border border-gray-400  rounded-2xl'>
                <img src={rajesthan} alt="" className='w-80 h-40 rounded-2xl'/>
                <div className='p-2'>
                    <div className='text-xl font-bold'>rajesthan Tour</div>
                    <div className='text-gray-500'>6 Days/5 Nights</div>
                    <div className=' flex justify-between text-xl font-bold text-blue-600 '>
                        <div>
                            <div>₹18,999</div>
                        </div>
                        
                        <div>
                            <button className='size-7 rounded-4xl bg-blue-200 active:scale-95'><ArrowRight/></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border border-gray-400  rounded-2xl'>
                <img src={europe} alt="" className='w-80 h-40 rounded-2xl'/>
                <div className='p-2'>
                    <div className='text-xl font-bold'>Europe Tour</div>
                    <div className='text-gray-500'>8 Days/7 Nights</div>
                    <div className=' flex justify-between text-xl font-bold text-blue-600 '>
                        <div>
                            <div>₹89,999</div>
                        </div>
                        
                        <div>
                            <button className='size-7 rounded-4xl bg-blue-200 active:scale-95'><ArrowRight/></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default OurPackages