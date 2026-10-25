import React from 'react'
import heroImage from '../../../assets/herosection.jpg'
import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react'

const HeroSection = () => {
  return (
  <>
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}aria-label="Travel destinations ">
      <div className='p-20 pl-30 '>
        <div className=''>DISCOVER AMAZING PLACES</div>
        <h1 className='text-9xl mt-2 font-bold font-birthstone'>Travel <br /><span className='text-yellow-400'>The World </span> </h1>
        <p className='text-white mt-2'>Explore new destinations, create unforgettable memories and experience the beauty of the world <br /> with our specially curated travel packages</p>
        <button className='flex mt-4 bg-orange-500 text-white px-5 py-2 rounded-3xl active:scale-95'>Explore Packages <ArrowRight /></button>
      </div>
    </div>
    <div className='relative bottom-17  '>
       <form className='flex absolute p-6  bg-white z-10 left-50 gap-4 rounded-2xl shadow-2xl'>
        <div className=' flex '>
            <MapPin className='size-10 text-blue-600'/>
            <div className='ml-3'>where to? <br /><span><input type="text" placeholder='Select destination' /></span></div>
        </div>
        <div className='flex'>
            <CalendarDays className=' size-10 text-blue-600'/>
            <div className='ml-3'>Travel date <br /><span><input type="date" name="date" id="date" /></span> </div>
            
        </div>
        <div className='flex '>
            <Users className=' size-10 text-blue-600' />
            <div className='ml-3'>Travelles <br /><span><input type="number" name="" id="" placeholder='2 People' /></span></div>
        </div>
        <button className='flex bg-blue-600 text-white px-5 py-3 rounded-3xl active:scale-95'>Search Now <ArrowRight/></button>
        </form> 
    </div>
    </>
  )
}

export default HeroSection