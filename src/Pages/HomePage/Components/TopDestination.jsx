import td1 from '../../../assets/TD1.jpg'
import td2 from '../../../assets/TD2.jpg'
import td3 from '../../../assets/TD3.jpg'
import td4 from '../../../assets/TD4.jpg'
import topDestinationsBackground from '../../../assets/TopDes.jpg'
import { ArrowRight } from 'lucide-react'

const TopDestination = () => {
  return (
    <>
   <section
     className='bg-cover bg-center p-20'
     style={{ backgroundImage: `url(${topDestinationsBackground})` }}
   >
     <div className='text-gray-500 text-center '>TOP DESTINATIONS</div>
     <div className='text-3xl font-bold text-center mt-2'>Popular <span className='text-blue-600'>Destinations</span></div>
     <div className='text-gray-600 mt-5 text-center'>Explore our handpicked destination around the world.</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 p-2'>
        <div className='min-w-0 overflow-hidden border-2 border-gray-300 rounded-xl bg-white'>
            <img src={td1} alt="Manali" className='block h-45 w-full object-cover' />
            <div className='p-2'>
                <div className='text-xl font-bold'>Manali</div>
                <p className='text-gray-500'>Himachal Pradesh</p>
                <div><span>⭐️</span>4.8 (1.2k Reviews)</div>
               <div className='flex'>
                 <div className='text-xl text-blue-600'>₹8,999</div>
                 <button className='text-blue-600 bg-blue-200 rounded-4xl p-1 ml-35 active:scale-95'><ArrowRight/></button>
               </div>
                <p className='text-gray-500'>3 Days/2Nights</p>
            </div>
            
        </div>
        <div className='min-w-0 overflow-hidden border-2 border-gray-300 rounded-xl bg-white'>
            <img src={td2} alt="Maldives" className='block h-45 w-full object-cover' />
            <div className='p-2'>
                <div className='text-xl font-bold'>Maldives</div>
                <p className='text-gray-500'>International</p>
                <div><span>⭐️</span>4.9 (2.1k Reviews)</div>
               <div className='flex'>
                 <div className='text-xl text-blue-600'>₹55,999</div>
                 <button className='text-blue-600 bg-blue-200 rounded-4xl p-1 ml-32 active:scale-95'><ArrowRight/></button>
               </div>
                <p className='text-gray-500'>4 Days/3Nights</p>
            </div>
            
        </div>
        <div className='min-w-0 overflow-hidden border-2 border-gray-300 rounded-xl bg-white'>
            <img src={td3} alt="Paris" className='block h-45 w-full object-cover' />
            <div className='p-2'>
                <div className='text-xl font-bold'>Paris</div>
                <p className='text-gray-500'>France</p>
                <div><span>⭐️</span>4.8 (980 Reviews)</div>
               <div className='flex'>
                 <div className='text-xl text-blue-600'>₹72,999</div>
                 <button className='text-blue-600 bg-blue-200 rounded-4xl p-1 ml-32 active:scale-95'><ArrowRight/></button>
               </div>
                <p className='text-gray-500'>5 Days/4Nights</p>
            </div>
            
        </div >
        <div className='min-w-0 overflow-hidden border-2 border-gray-300 rounded-xl bg-white'>
            <img src={td4} alt="bali" className='block h-45 w-full object-cover' />
            <div className='p-2'>
                <div className='text-xl font-bold'>Bali</div>
                <p className='text-gray-500'>Indonesia</p>
                <div><span>⭐️</span>4.7 (1.5k Reviews)</div>
               <div className='flex'>
                 <div className='text-xl text-blue-600'>₹35,999</div>
                 <button className='text-blue-600 bg-blue-200 rounded-4xl p-1 ml-32 active:scale-95'><ArrowRight/></button>
               </div>
                <p className='text-gray-500'>4 Days/3Nights</p>
            </div>
            
        </div>
      </div>
   </section>
  
    </>
  )
}

export default TopDestination