import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Headers = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='font-serif flex  md:fixed md:flex text-white text-3xl w-[100%] md:text-xl md:w-full md:h-10 justify-between px-5'>
            <h1 className='md:pt-2 pt-2 font-serif'>TJ</h1>
            <nav>
                <ul className='hidden md:flex gap-8 pt-2 md:justify-end'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className='md:hidden block'>
                <ul onClick={() => setToggleMenu(!toggleMenu)} className='fixed grid gap-3 top-9 text-center w-full backdrop-blur-md text-xl  left-0'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='md:hidden'><Bars3Icon className='text-white h-7' /></button>
        </div>
    )
}

export default Headers
