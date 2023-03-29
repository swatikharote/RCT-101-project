import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from "@chakra-ui/react"
import Footer from './Footer';
import HomePage from './HomePage';


export const AllRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/foo" element={<Footer />}></Route>
        </Routes>

    )
}
