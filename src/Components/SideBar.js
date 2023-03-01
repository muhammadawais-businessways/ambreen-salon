import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import Services from '../Pages/Services'
import VisitUs from '../Pages/VisitUs'

const SideBar = () => {
    return (
        <>
            <div className="flex ">
                <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" defaultChecked />
                <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked peer-checked">
                    <div class="space-y-2">
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                    </div>
                </label>
                <div className="fixed top-[55px] left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                    <div className="px-6 py-4">
                        
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default SideBar