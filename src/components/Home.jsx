import React from 'react'
import Headers from './Headers'

const Home = () => {
    return (
        <div>
            <div id='home' className='bg-home bg-center bg-cover w-[100%] md:w-[100%] md:h-[100vh] h-[595px]'>
                <Headers />
                <div className=' text-center justify-center grid gap-2'>
                    <div className='mt-48 md:mt-48 font-serif rounded-3xl backdrop-blur-2xl backdrop-filter text-slate-300'>
                        <h1 className='text-[40px] md:text-[120px] px-5'>Tamilselvan J</h1>
                        <p className='md:text-4xl mt-[-10px] py-5'>Front End Developer</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
