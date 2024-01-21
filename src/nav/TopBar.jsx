import React, { useState } from 'react'
import '../assets/css/TopBar.css'
import { RiMenu3Fill } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';

function TopBar() {
    const links = [
        {
            name: 'Home', 
            target: 'homeSection'
        }, 
        {
            name: 'About', 
            target: 'aboutSection'
        }, 
        {
            name: 'Skills', 
            target: 'skillsSection'
        }, 
        {
            name: 'Contact', 
            target: 'contactSection'
        }
    ]

    const [activeLink, setActiveLink] = useState(0);


    const toggleBetweenLinks = (index) => {
        setActiveLink(index)
        console.log(index)
    }

    return (
        <nav className=' w-full h-[50px] px-6 flex items-center justify-between'>
            
            {/* Logo */}
            <div>
                <span>Jabir</span>
            </div>


            {/* Header */}
            <div className='nav_header h-full'>

                <ul className=' flex items-center gap-2 h-full'>
                    {links.map((link, index) => (
                        <li 
                            key={index} 
                            className={` 
                                nav_links cursor-pointer flex items-center text-teal-400' text-white
                                ${activeLink === index ? 'active' : ''}
                            `} 
                            onClick={() => toggleBetweenLinks(index)}>
                            <ScrollLink
                                to={link.target}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                >
                                    {link.name}
                                </ScrollLink>
                        </li>
                    ))}
                </ul>

                    {/* Icon */}
                    <div className='nav_icons_div'>
                        <RiMenu3Fill className='menu_icon' />
                    </div>

            </div>
        </nav>
    )
}

export default TopBar