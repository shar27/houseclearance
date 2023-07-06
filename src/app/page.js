import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="h-screen">
    <header className='bg-white h-24 w-full text-green-900 font-bold relative p-0 lg:p-12 
   '>
    <div className='absolute top-0 left-12 z-10 flex-center lg:flex-start'>
    <Image
    className='h-44 w-full z-0 -mt-12 '
    src={'/logo.png'}
    width={300}
    height={200}
    />
    </div>
    <div>
    
    
    </div>
    <div className='flex flex-center lg:justify-end gap-10'>
   
    <span>01494 439935 </span>
    <h1> hello@houseclearancehighwycombe.co.uk </h1>
   
    </div>
    
    </header>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
    <div className='mt-0 lg:mt-10 w-full inline-block'>
      <Image className='inline-block bg-cover hidden lg:block '
      src={'/van2.jpeg'}
      width={570}
      height={500}
      />
    
    </div>
    <div className='bg-green-900 h-full w-full mt-10 text-white font-bold text-center p-2 lg:p-10 '>
      <h1 className='text-3xl'>Local house clearance specialists</h1>
      <p className='text-lg'>Organising clearances can be difficult, let us take away the stress from you</p>
      <p className='text-lg'>Serving high wycombe, slough, amersham and surrounding areas of buckinghamshire</p>
    </div>
    </div>
{/* content */}
    <div className='p-2 lg:p-10'>
    <div className=' h-full w-full mt-10 text-black font-bold text-center  '>
      <h1 className='text-3xl'>We specialise in bereavement clearances</h1>
      <p className='text-lg'>Organising clearances can be difficult, let us take away the stress from you</p>
      <p className='text-lg'>Serving high wycombe, slough, amersham and surrounding areas of buckinghamshire</p>
    </div>

    {/* badges */}
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 p-10'>
      <div>
        <Image 
        src={'/tick2.png'}
        width={300}
        height={300}
        />
      </div>
      <div>
        <Image 
        src={'/trust2.png'}
        width={300}
        height={300}
        />
      </div>
      <div>
        <Image 
        src={'/env.png'}
        width={300}
        height={300}
        />
      </div>
    </div>
    </div>
   
    </main>
  )
}
