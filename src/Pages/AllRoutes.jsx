import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from "@chakra-ui/react"
import Footer from './Footer';
import HomePage from './HomePage';
import { SignIn } from './SignIn';
import { Login } from './Login ';
import { AllProduct } from './AllProduct';


export const AllRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/foo" element={<Footer />}></Route>
            <Route path="/sign" element={<SignIn />}></Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/allProduct" element={<AllProduct />}> </Route>
        </Routes>

    )
}
