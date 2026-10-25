import { Headset, Map, Plane, ShieldCheck } from 'lucide-react'
import whyChooseUsBackground from '../../../assets/WCU.jpg'

const WhyChooseUs = () => {
  return (
    <>
     <div
      className="min-h-[30rem] bg-cover bg-center "
      style={{ backgroundImage: `url(${whyChooseUsBackground})` }}
      aria-label="Why choose us">
        <div className='p-18'>
        <div className='text-gray-500'>WHY CHOOSE US</div>
        <div className='text-6xl font-bold mt-3'>Your Trust <span className='text-blue-600 '>Travel Partner</span></div>
        <div className='text-gray-500 mt-3'>We must travel simple, safe and memorable with the best services <br />and personlized experiences.</div>
        <div className='flex mt-10 gap-5'>
            <div>
                <Plane className='size-9 bg-blue-600 text-white rounded-[360px] p-1' />
                <div className='text-xl font-bold'>Best Travel Deals</div>
                <div className='text-gray-500'>Get the best prices on <br /> flights,hotels and packages.</div>
            </div>
             <div>
                <Headset className='size-9 bg-purple-600 text-white rounded-[360px] p-1' />
                <div className='text-xl font-bold'>24/7 Support</div>
                <div className='text-gray-500'>We're always here<br />to help you.</div>
            </div>
             <div>
                <ShieldCheck className='size-9 bg-blue-400 text-white rounded-[360px] p-1' />
                <div className='text-xl font-bold'>Safe & Secure</div>
                <div className='text-gray-500'>Your safty is our <br /> priority.</div>
            </div>
             <div>
                <Map className='size-9 bg-green-400 text-white rounded-[360px] p-1' />
                <div className='text-xl font-bold'>Customized Packages</div>
                <div className='text-gray-500'>tailored-made trips <br /> as per your needs.</div>
            </div>
        </div>
        </div> 
     </div>
   
    
    </>
  )
}

export default WhyChooseUs