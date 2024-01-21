import React, { useState } from 'react'
import '../assets/css/SkillsPage.css'

import html_logo from '../assets/images/html_logo.png'
import css_logo from '../assets/images/css_logo.png'
import javaScript_logo from '../assets/images/javaScript_logo.png'
import reactJS_logo from '../assets/images/reactJS_logo.png'
import nodeJS_logo from '../assets/images/nodeJS_logo.png'
import postgres_logo from '../assets/images/postgres_logo.png'
import tailwind_logo from '../assets/images/tailwind_logo.png'
import flutter_logo from '../assets/images/flutter_logo.png'
import dart_logo from '../assets/images/dart_logo.png'
import kotlin_logo from '../assets/images/kotlin_logo.png'
import php_logo from '../assets/images/php_logo.png'
import swift_logo from '../assets/images/swift_logo.png'

function SkillsPage() {
    const [seeMore, setSeeMore] = useState(false);

    const skills = [
        {
            name: 'HTML5',
            icon: html_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'CSS',
            icon: css_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'javaScript',
            icon: javaScript_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'ReactJs',
            icon: reactJS_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'NodeJS',
            icon: nodeJS_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'PostgreSQL',
            icon: postgres_logo,
            level: 'Expirenced',
            type: 'starting'
        },
        {
            name: 'Tailwind',
            icon: tailwind_logo,
            level: 'Expirenced',
            type: 'more'
        },
        {
            name: 'Flutter',
            icon: flutter_logo,
            level: 'In progress',
            type: 'more'
        },
        {
            name: 'Dart',
            icon: dart_logo,
            level: 'In progress',
            type: 'more'
        },
        {
            name: 'Kotlin',
            icon: kotlin_logo,
            level: 'Planning ...',
            type: 'more'
        },
        {
            name: 'PHP',
            icon: php_logo,
            level: 'Planning ...',
            type: 'more'
        },
        {
            name: 'Swift',
            icon: swift_logo,
            level: 'Planning ...',
            type: 'more'
        },
    ]

    const startingSkills = skills.filter(skill => skill.type == 'starting')


    const handleSeeMoreButtonClick = () => {
        setSeeMore(!seeMore)
    }
    return (
        <div className=' skills_page w-full h-full flex'>
            <section className='skills_page_section_one'>

                <div className='skills_card_wrapper flex flex-col'>
                    <h1 className='text-center font-bold text-3xl text-white'>My skills</h1>
                    <div className=' skills_card_container'>
                        {
                            (seeMore ? skills : startingSkills).map((skill, index) => (
                            <div className='skill_card' key={index}>
                                <p className=' text-white font-semibold text-center'>{skill.name}</p>
                                <img src={skill.icon} className=' w-[40px] h-[40px] m-auto' />
                                <p className=' text-gray-300 text-sm text-center'>{skill.level}</p>
                            </div>
                        ))
                        }
                    </div>

                    <button 
                        onClick={handleSeeMoreButtonClick}
                        className=' see_more_button'>
                        {seeMore ? 'Show less' : 'See more'}
                    </button>
                </div>


            </section>

            {/* section two */}
            <section className='skills_page_section_two'>
                <h1 className=' text-center font-bold text-3xl text-yellow-400'>What are my skills ?</h1>
            </section>
        </div>
    )
}

export default SkillsPage