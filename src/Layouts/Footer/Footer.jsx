import React from 'react'
import footer from '../../assets/footer.jpg'
import { Dot, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='p-4 flex items-center justify-around bg-black '>
      <div className='flex items-center'>
        <div>
          <img src={footer} alt="" className='h-16' />
        </div>
        <div className='ml-2'>
          <div className='text-4xl text-white font-bold'>Wanderly</div>
          <div className='flex text-gray-500 '>Explore<Dot/>Travel<Dot />Discover</div>
        </div>
      </div>
      <div>
        <div className='text-xl font-bold text-white items-center'>Quick Links</div>
        <ul className='text-gray-500 mt-2'>
          <li>Home</li>
          <li>Packages</li>
          <li>About</li>
          <li>Destination</li>
          <li>Contact</li>
        </ul>

      </div>
      <div>
        <div className='text-xl font-bold text-white'>Popular Destination</div>
        <ul className='text-gray-500 mt-2'>
          <li>Manali</li>
          <li>Kerela</li>
          <li>Bali</li>
          <li>Paris</li>
          <li>Maldives</li>
        </ul>

      </div>
      <div>
        <div className='text-xl font-bold text-white  '>Contact Info</div>
        <ul className='text-gray-500 mt-9 '>
          <li className='flex '><MapPin />123 Travel Street,New Delhi ,India</li>
          <li className='flex mt-2'><Phone />+91 98756 43210</li>
          <li className='flex mt-2'><Mail />info@youwebsite.com</li>
          
        </ul>

      </div>
    </div>
    </>
  )
}

export default Footer