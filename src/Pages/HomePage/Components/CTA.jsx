import { ArrowRight } from 'lucide-react'
import ctaBackground from '../../../assets/cta.jpg'

const CTA = () => {
  return (
    <section
      className='min-h-[20rem] bg-cover bg-top px-6 py-32'
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <div className='flex items-center justify-around '>
        <div>
          <div className='text-4xl font-bold text-white'>Ready for Your Next Adventure?</div>
          <div className='text-xl mt-1 text-white'>Let us help you plan a trip you'll never forget.</div>
        </div>
        <button className='flex bg-orange-500 text-white px-5 py-2 rounded-4xl active:scale-95'>Plan Your trip <ArrowRight/></button>
      </div>
    </section>
  )
}

export default CTA