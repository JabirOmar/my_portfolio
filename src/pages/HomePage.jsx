import React from 'react'
import '../assets/css/HomePage.css'
import myCV from "../assets/pdf/Jabir's_CV.pdf"

function HomePage() {
    return (
        <div className=' home_page w-full h-full'>
            {/* section one */}
            <section className='home_page_section_one flex flex-col justify-center'>
                <h1 className=' text-3xl font-bold text-amber-500'>Hi there,</h1>
                <h1 className=' text-2xl mt-4 font-bold text-yellow-400'>
                    Welcome to the World of Innovation!
                </h1>
                <p className=' text-white text-lg mt-2'>
                    Elevate your digital experience through an inspiring coding journey.
                </p>
                <div className=' mt-8 flex gap-6'>
                    <a href={myCV} download={"Jabir's_CV.pdf"}>
                        <button className=' py-3 px-4 font-medium text-yellow-400'>Download CV</button>
                    </a>
                </div>
            </section>


            {/* section two */}
            <section className='home_page_section_two'>
                <h1 className='  text-4xl font-bold text-yellow-400 text-center'>Jabir bin Omer</h1>
            </section>
        </div>
    )
}

export default HomePage