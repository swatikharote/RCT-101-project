import React from 'react'
import { Input, Box, Heading, Text, Button, Alert } from '@chakra-ui/react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import '../App.css'

export const SignIn = () => {
    const { isAuth, Login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(email, password)

    const handleSubmit = () => {
        Login(email, password)
    }
    if (isAuth) {
        return <Navigate to="/" />
    }
    return (
        <div>

            <Box className='shadow-2 gray' p={5} w={"30%"} gap={5} m="100px auto">
                <Text fontSize={"40px"} fontWeight={"40"}>Sign In</Text>
                <Input mt={5} variant='outline' placeholder='Email Adress' onChange={(e) => setEmail(e.target.value)} />
                <Input mt={5} variant='outline' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <Button mt={5} colorScheme='blue' onClick={handleSubmit} >Sign In</Button>


            </Box>
        </div>
    )
}
