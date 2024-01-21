import React, { useState } from 'react'
import '../assets/css/AboutMe.css'
import QuestionMark from '../assets/images/question.jpg'

function AboutMe() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreButtonClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div 
            className=' about_page w-full h-full '
        >
            {/* Section one */}
            <section className='about_page_section_one '>
                <h1 className=' text-center font-bold text-3xl text-yellow-400'>Who am I ?</h1>
            </section>


            {/* Section two */}
            <section className='about_page_section_two'>
                {/* <div'> */}
                    <h1 className='text-center font-bold text-3xl text-amber-300 py-4 '>About me</h1>

                    <div className=' paragraph_container p-6 px-14 text-white '>

                        <p>Hello there! I'm Jabir Omar, a software developer with a diverse journey that has shaped both my skills and worldview.</p>
                            <br/>
                        <p> I embarked on my educational journey from the vibrant city of Jigjiga, where I laid the foundation of my learning journey from kindergarten to grade 5.</p>
                            <br/>
                        <p>The city of Addis Ababa became my academic hub during the crucial years from grade 5 to 8.</p>
                            <br/>
                        <p>Later, I returned to Jigjiga to complete my high school education, adding a personal touch to my academic narrative.</p>
                            <br/>
                        <p>My quest for knowledge then led me to the bustling tech hub of Nairobi, Kenya, where I pursued my university studies and further honed my skills through a rigorous coding bootcamp.</p>


                        <div className={` more_details ${showMore ? 'show': ''} `}>
                            <br/>
                            <p>Upon emerging from the coding crucible, I embraced my role as a software developer at CelluTech, a dynamic privately-owned company. Here, I've had the privilege of contributing to innovative projects and collaborating with a talented team.</p>
                            <br/>
                            <p>My journey reflects not only my academic and professional growth but also the rich cultural tapestry that has influenced my perspective. I approach each coding challenge with a blend of technical acumen and a global mindset, fueled by the diverse experiences that have shaped my path.</p>
                        </div>

                        <button type='button' className='see_more_button' onClick={handleShowMoreButtonClick}>Show {showMore ? 'less' : 'more'}</button>

                    {/* </div> */}
                </div>
            </section>
        </div>
    )
}

export default AboutMe