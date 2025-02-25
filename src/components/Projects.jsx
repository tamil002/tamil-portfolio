import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='text-slate-400 bg-home2 bg-cover bg-center bg-no-repeat w-[100%] md:w-[100%] md:h-[200%] font-serif'>
            <h1 className='text-4xl text-center text-slate-300 p-3 md:p-5'>PROJECTS</h1>
            <div className='md:ml-12 md:flex justify-center md:gap-6'>
                <div>
                    <div className="carousel carousel-center backdrop-blur-xl rounded-box ml-9 w-[80%] h-[50%] md:w-[80%] md:max-w-md md:h-[60%] md:space-x-2 md:p-4 mt-5 md:ml-5">
                        <div className="carousel-item">
                            <img
                                src="Login.png"
                                className="rounded-box w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="signup.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="feedback.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="feedback 1.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                    </div>
                    <div>
                        <button className='text-2xl p-2 ml-10 mt-3 mr-8 md:text-3xl md:px-3  md:py-5 md:ml-2 md:mt-4 backdrop-blur-1xl md:backdrop-blur-2xl rounded-lg'><a href='https://github.com/tamil002/Feedback-project'>Feedback Collection System</a></button>
                    </div>
                </div>
                <div>
                    <div className="carousel carousel-center backdrop-blur-xl rounded-box ml-8 w-[80%] h-[50%] md:w-[80%] md:max-w-md md:h-[60%] md:space-x-2 md:p-4 mt-5 md:ml-5">
                        <div className="carousel-item">
                            <img
                                src="food1.png"
                                className="rounded-box w-[78%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="food2.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="food3.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="food4.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="food5.png"
                                className="rounded-box  w-[85%] md:w-[90%] md:h-[90%] md:ml-4 md:mt-3" />
                        </div>

                    </div>
                    <div>
                        <button className='text-2xl p-2 ml-[53px] mb-2 mt-3 mr-8 md:text-3xl md:px-3  md:py-5 md:ml-12 md:mt-4 backdrop-blur-1xl md:backdrop-blur-2xl rounded-lg'><a href='https://github.com/tamil002/recipe-app'>Food Recipe Website</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
