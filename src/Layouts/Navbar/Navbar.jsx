import { Dot } from 'lucide-react'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
    <div className=' flex justify-around items-center '>
        <div className='flex items-center'>
            <img src={logo} alt="" className='h-22' />
            <div>
                <div className='text-blue-800 text-4xl font-bold '>Wanderly</div>
                <p className='flex text-[12px] text-gray-500 items-center'>Explore<Dot/>Travel<Dot/>Discover</p>
            </div>
        </div>
        <nav className=''>
            <ul className='flex gap-6'>
                <li className='hover:text-blue-600'><a href="/">Home</a></li>
                <li className='hover:text-blue-600'><a href="/">Packages</a></li>
                <li className='hover:text-blue-600'><a href="/">About</a></li>
                <li className='hover:text-blue-600'><a href="/">Destination</a></li>
                <li className='hover:text-blue-600'><a href="/">Contact</a></li>
            </ul>
        </nav>
        <button className='bg-orange-500 text-white py-2 px-4 rounded-3xl active:scale-95'>Plan Your Trip </button>
    </div>
    </>
  )
}

export default Navbar