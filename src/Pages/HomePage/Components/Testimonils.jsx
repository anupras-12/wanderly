import React from 'react'
import profile from '../../../assets/Profile.jpg'

const Testimonils = () => {
  return (
    <>
    <div className='p-2' >
        <div className='text-gray-500 text-center'>TESTIMONIALS</div>
        <div className='text-4xl font-bold text-center mt-2'>What our <span className='text-blue-600'>Travelers Say</span></div>
        <div className='flex items-center gap-7 border-2 p-2 justify-center ml-56 mr-56 rounded-2xl border-gray-400 mt-7'>
          <div>
            <img src={profile} alt="profile img" className='h-20 rounded-4xl' />
          </div>
          <div>
            <div className='text-gray-500'>⭐️⭐️⭐️⭐️⭐️ <br />"Amazing experience everthing was well organized and the support team <br />was very helpful throughout the trip. Highly recommended. "</div>
            <div className='flex gap-7'>
              <div className='font-bold'>-Rahul Sharma</div>
              <div className='text-gray-500'>Manali Tour</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Testimonils