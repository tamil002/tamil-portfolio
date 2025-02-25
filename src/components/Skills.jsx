import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='text-slate-400 pb-5 md:grid md:gap-4 bg-home1 bg-center bg-cover bg-no-repeat w-[100%] md:w-[100%] md:h-[200%]'>
            <h1 className='text-4xl font-serif text-center pt-5 text-slate-300'>SKILLS</h1>
            <div className='md:flex pl-16 md:pl-14 md:gap-10 md:pt-5 justify-center'>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="html.jpeg"
                            alt="html"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">HTML</h2>
                    </div>
                </div>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="css.png"
                            alt="html"
                            className="rounded-xl size-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">CSS</h2>
                    </div>
                </div>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="js.png"
                            alt="html"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">JAVA SCRIPT</h2>
                    </div>
                </div>
            </div>
            <div className='md:flex pl-16 md:pl-14 md:gap-10 md:pt-5 justify-center'>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="react.png"
                            alt="html"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">REACT</h2>
                    </div>
                </div>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="tailwind.png"
                            alt="html"
                            className="rounded-xl size-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">TAILWIND CSS</h2>
                    </div>
                </div>
                <div className="card  w-56 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="daisy.png"
                            alt="html"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif text-center text-2xl">DAISY UI</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
