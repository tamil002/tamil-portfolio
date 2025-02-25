import React from 'react'

const About = () => {
    return (
        <div id='about' className='text-slate-400 bg-home3 bg-cover bg-center bg-no-repeat font-serif w-[100%] md:w-[100%] md:h-[80vh]'>
            <h1 className='md:text-4xl text-3xl text-slate-300 text-center pt-5'>ABOUT</h1>
            <div className='pt-3 md:pt-8'>
                <div className="hero w-[100%] md:w-[50%] md:ml-80 backdrop-blur-[200px] rounded-lg">
                    <div className="hero-content grid md:flex md:lg:flex-row">
                        <img
                            src="my-img.jpeg"
                            className="md:max-w-sm rounded-lg shadow-2xl md:-ml-0 ml-[3px] w-[97%] md:w-[35%]" />
                        <div>
                            <h1 className="text-5xl font-bold">About Me!</h1>
                            <p className="py-5">
                                I'm Tamilselvan, a Frontend Developer with a Bachelor of Engineering in Computer Science and Engineering.
                                I specialize in building responsive and user-friendly web applications using modern frontend technologies like HTML, CSS, JavaScript, and React.
                                Passionate about UI/UX, I focus on creating seamless digital experiences. Always eager to learn and innovate, I strive to deliver high-quality solutions.

                            </p>
                            <button className="btn btn-primary md:text-xl"><a href='https://www.linkedin.com/in/j-tamilselvan-b10868268'>Linked In</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

