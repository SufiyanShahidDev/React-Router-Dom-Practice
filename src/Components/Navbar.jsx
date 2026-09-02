import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='p-4 bg-gray-800 text-white flex justify-around'>
            <div className='font-bold text-2xl'>React Router DOM</div>


            <ul className='flex gap-5 font-bold'>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                <Link to={"/about"}>
                <li>About</li>
                </Link>
                <Link to={"/contact"}>
                <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar