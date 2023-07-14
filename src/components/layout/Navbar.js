import React, { useState } from 'react'
import face from '../../media/face.webp'
import { Link,useLocation } from 'react-router-dom';



const Navbar = () => {
    const location=useLocation();
    return (
        <header className="rounded-b-lg md:fixed lg:fixed z-10 text-gray-400 bg-black w-full body-font shadow-lg shadow-black">
            <div className="flex flex-wrap py-3 flex-col md:flex-row items-center lg:justify-between">
                <Link className="flex mx-auto lg:mx-20 title-font font-medium items-center text-yellow-500 mb-4 md:mb-0" to='/'>
                    <img src={face} alt="" id='logo' width={40} height={40}/>
                    <span className="ml-6 text-2xl text-yellow-300 font-bold">DURGA</span><span className=" ml-3 text-2xl text-rose-600 font-bold">PUJA</span>
                </Link>
                <nav className="mx-auto lg:mx-20 flex flex-wrap items-center text-base justify-center">
                    
                    <div>
                        <Link className={location.pathname === '/about' ? "mx-5 text-yellow-500" : "mx-5 text-yellow-500 hover:text-rose-600 hover:font-semibold"} to='/about' >About Me</Link>
                        <div className={location.pathname === '/about' ? "h-1 w-100 mx-5 mt-1 bg-rose-600 rounded" : ''}></div>
                    </div>
                    <div> <Link className={location.pathname === '/pandals' ? "mx-5 text-yellow-500" : "mx-5 text-yellow-500 hover:text-rose-600 hover:font-semibold"} to='/pandals' >Top Puja Pandals</Link>
                        <div className={location.pathname === '/pandals' ? "h-1 w-100 mx-5 mt-1 bg-rose-600 rounded" : ''}></div>
                    </div>

                    <div> <Link className={location.pathname === '/puja' ? "mx-5 text-yellow-500" : "mx-5 text-yellow-500 hover:text-rose-600 hover:font-semibold"} to='/puja' >About Durga Puja</Link>
                        <div className={location.pathname === '/puja' ? "h-1 w-100 mx-5 mt-1 bg-rose-600 rounded" : ''}></div>
                    </div>

                    <div> <Link className={location.pathname === '/contact' ? "ml-5 text-yellow-500" : "ml-5 text-yellow-500 hover:text-rose-600 hover:font-semibold"} to='/contact' >Contact</Link>
                        <div className={location.pathname === '/contact' ? "h-1 w-100 ml-5 mt-1 bg-rose-600 rounded" : ''}></div>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Navbar
