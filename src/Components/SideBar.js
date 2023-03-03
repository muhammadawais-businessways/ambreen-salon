import React from 'react'
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className="flex ">
                <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" defaultChecked />
                <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked peer-checked">
                    <div class="space-y-2 ">
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                    </div>
                </label>
                <div className="fixed top-[55px] left-0 z-20 w-40 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                    <div className="px-6 py-4">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/visit-us">Visit Us</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About Us</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar