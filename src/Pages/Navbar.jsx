import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios"



import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"
import { GiWireframeGlobe } from "react-icons/gi"
import { GiHumanTarget } from "react-icons/gi"
import { IoIosContact } from "react-icons/io"
import { border, Box, Flex, Input, Text, Image, _groupHover, Icon, Button } from "@chakra-ui/react";
import HoverMenu from '../components/HoverMenu';
import DesktopNav from '../components/DesktopNav';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';


const style = {
    navbar: {
        position: "static",
        height: "auto",
        width: "100%",
        border: "1px solid black"
    }
}

const menuItems = [
    {
        name: 'APEX',
        item: ['View all APEX', 'Computer & HCL', 'Strong', 'Cyber & Data Protection', 'Create custom solution', 'Resources']
    },
    {
        name: 'Products',
        item: ['View All Products',
            'Laptops',
            'Desktops & All-in-Ones',
            'Workstations',
            'Thin Clients',
            'Servers',
            'Data Storage',
            'Data Protection',
            'Networking',
            'Hyperconverged Infrastructure',
            'Monitors',
            'Electronics & Accessories',]
    },
    {
        name: 'Solutions',
        item: ['View All Solutions',
            'Cloud Solutions',
            'DevOps Tools and Solutions',
            'Edge Solutions',
            'Industry Solutions',
            'Infrastructure Solutions',
            'Midmarket Solutions',
            'OEM Solutions',
            'Security Solutions',
            'Small Business',
            'Workforce Solutions',]
    },
    {
        name: 'Services',
        item: ['View All Services',
            'Security Services',
            'Consulting Services',
            'Deployment Services',
            'Support Services',
            'Residency Services',
            'Education Services',
            'Services Technology',
            'Payment & ConsumptionSolutions']
    },
    {
        name: 'Support',
        item: ['Support Home',
            'Support Library',
            'Support Services & Warranty',
            'Drivers & Downloads',
            'Manuals & Documentation',
            'Diagnostics & Tools',
            'Service Requests & Dispatch Status',
            'Order Support',
            'Contact Support',
            'Community',]
    },
    {
        name: 'Deals',
        item: ['View All Deals',
            'Laptop Deals',
            'Desktop Deals',
            'XPS Laptop Deals',
            'Latitude Laptop Deals',
            'Workstation Deals',
            'Budget Laptop Deals',
            'Server, Storage & Networking Deal',
            'Monitor Deals',
            'Computer Accessories Deals',
            'Product Information & Marketing',]
    },
]

export const Navbar = () => {
    const [data, setData] = useState([])
    const { name } = useContext(AuthContext)



    const fetchAndRenderData = () => {
        axios.get("https://cute-red-angelfish-tutu.cyclic.app/products").then((res) => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        fetchAndRenderData()

    }, [])

    return (
        <Box style={style.navbar}>
            {/* header top div */}

            <Flex justifyContent={"space-around"} alignItems="center" bgColor={"#fff"}>
                <Link to={"/"}>
                    <Image src="./dell-tech.png" alt="name" width={"100px"} />
                </Link>
                <Flex justifyContent={"space-between"} border={"1px solid gray"} width="30%" borderRadius={"5px"}>
                    <Input type={"search"} border={"none"} />
                    <Icon as={CiSearch} fontSize="30px"></Icon>
                </Flex>

                <Flex justifyContent={"space-around"} width="30%">
                    {/* <Flex >
                        <Icon as={GiHumanTarget} fontSize="30px"></Icon>
                        <Link to="/sign">  <Text>Sign In</Text></Link>
                        <Icon as={RiArrowDropDownLine} fontSize="30px"   ></Icon>

                    </Flex>
                    <Flex>
                        <Icon as={IoIosContact} fontSize="30px"></Icon>
                        <Text>Contact us</Text>
                        <Icon as={RiArrowDropDownLine} fontSize="30px"   ></Icon>


                    </Flex>
                    <Flex>
                        <Icon as={GiWireframeGlobe} fontSize="30px"></Icon>
                        <Text>In/EN</Text>
                        <Icon as={RiArrowDropDownLine} fontSize="30px"   ></Icon>
                    </Flex>
                    <Flex>
                        <Icon as={AiOutlineShoppingCart} fontSize="30px"></Icon>
                        <Text>Cart</Text>
                        <Icon as={RiArrowDropDownLine} fontSize="30px"   ></Icon>

                    </Flex> */}
                    { }
                    <DesktopNav />

                </Flex>
            </Flex>

            <Flex justifyContent={"space-between"} width="50%" h={'30px'} m={'5px 20px'}>
                {menuItems?.map(m => <HoverMenu menu={m.name} menuList={m.item} />)}
            </Flex>

        </Box>
    )
}



