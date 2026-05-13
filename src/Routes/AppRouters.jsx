import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from '../Components/Layout/MainLayout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import SinglePage from '../Pages/SinglePage'

const AppRouters = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services/:id' element={<SinglePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRouters