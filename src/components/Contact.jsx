import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [inputData, setInputData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target,
            import.meta.env.VITE_PUBLIC_KEY).then((result) => {
                toast.success("Message Sent!");
                setInputData({ name: "", email: "", phone: "", message: "" })
            }).catch(() => toast.error("Oops! Something Went Wrong. Please try again!"))
    }
    return (
        <div id='contact' className='text-slate-400 bg-home4 bg-center bg-no-repeat bg-cover w-[100%] md:w-[100%] md:h-[80vh]'>
            <h1 className='md:text-4xl text-2xl text-center text-slate-300 font-serif pt-4 md:pt-5 md:p-4'>CONTACT US</h1>
            <div className='pt-1 md:pt-3 md:mx-96'>
                <form onSubmit={handleSubmit} className='grid gap-3 justify-center backdrop-blur-[2px] rounded-1xl'>
                    <div className='font-serif grid gap-3 justify-center'>
                        <input
                            type="text"
                            name="name"
                            required
                            value={inputData.name}
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                            placeholder="Your Full Name"
                            className="input input-ghost border-gray-500 w-[60%] md:w-full max-w-xs mx-[68px] md:mx-[65px] mt-3 "
                        />
                        <input
                            type="text"
                            name="email"
                            required
                            value={inputData.email}
                            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                            placeholder="Your Email"
                            className="input input-ghost border-gray-500 w-[60%] md:w-full max-w-xs mx-[68px] md:mx-[65px] mt-3 "
                        />
                        <input
                            type="text"
                            name="phone"
                            required
                            value={inputData.phone}
                            onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
                            placeholder="Your Phone Number"
                            className="input input-ghost border-gray-500 w-[60%] md:w-full max-w-xs mx-[68px] md:mx-[65px] mt-3"
                        />
                        <textarea
                            message="message"
                            name="message"
                            required
                            value={inputData.message}
                            onChange={(e) => setInputData({ ...inputData, message: e.target.value })}
                            className="textarea textarea-ghost border-gray-500 w-[60%] md:w-[320px] mx-[68px] md:mx-[65px] mt-3"
                            placeholder="Write Your Message..."></textarea>

                    </div>
                    <div>
                        <button className="btn btn-active btn-ghost md:text-lg font-serif text-slate-200 mx-[68px] mb-3 md:mb-0 md:mx-[65px] mt-3">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
