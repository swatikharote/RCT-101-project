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
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const style = {
    navbar: {
        position: "static",
        height: "auto",
        width: "100%",
    }
}

const NAV_ITEMS = [
    {
        label: 'Sign In',
        show: true,
        children: [
            {
                label: 'Sign In',
                subLabel: '',
                href: '/sign',
            },
            {
                label: 'Create Account',
                subLabel: '',
                href: '#',
            },
        ],
    },
    {
        label: 'Contact us',
        href: '#',
        show: true,
    },
    {
        label: 'In/En',
        href: '#',
        show: true,
    },
    {
        label: 'Cart',
        href: '#',
        show: true,
    },

];

const menuItems = [
    {
        label: 'APEX',
        href: '#',
        children: [
            { label: 'View all APEX', href: '#', },
            { label: 'Computer & HCL', href: '#', },
            { label: 'Strong', href: '#', },
            { label: 'Cyber & Data Protection', href: '#', },
            { label: 'Create custom solution', href: '#', },
            { label: 'Resources', href: '#', },
        ]
    },
    {
        label: 'Products', href: '#',
        children: [
            { label: 'View All Products', href: '/allProduct', },
            { label: 'Laptops', href: '#', },
            { label: 'Desktops & All-in-Ones', href: '#', },
            { label: 'Workstations', href: '#', },
            { label: 'Thin Clients', href: '#', },
            { label: 'Servers', href: '#', },
            { label: 'Data Storage', href: '#', },
            { label: 'Data Protection', href: '#', },
            { label: 'Networking', href: '#', },
            { label: 'Hyperconverged Infrastructure', href: '#', },
            { label: 'Monitors', href: '#', },
            { label: 'Electronics & Accessories', href: '#', },
        ]
    },
    {
        label: 'Solutions', href: '#',
        children: [
            { label: 'View All Solutions', href: '#', },
            { label: 'Cloud Solutions', href: '#', },
            { label: 'DevOps Tools and Solutions', href: '#', },
            { label: 'Edge Solutions', href: '#', },
            { label: 'Industry Solutions', href: '#', },
            { label: 'Infrastructure Solutions', href: '#', },
            { label: 'Midmarket Solutions', href: '#', },
            { label: 'OEM Solutions', href: '#', },
            { label: 'Security Solutions', href: '#', },
            { label: 'Small Business', href: '#', },
            { label: 'Workforce Solutions', href: '#', },
        ]
    },
    {
        label: 'Services', href: '#',
        children: [
            { label: 'View All Services', href: '#', },
            { label: 'Security Services', href: '#', },
            { label: 'Consulting Services', href: '#', },
            { label: 'Deployment Services', href: '#', },
            { label: 'Support Services', href: '#', },
            { label: 'Residency Services', href: '#', },
            { label: 'Education Services', href: '#', },
            { label: 'Services Technology', href: '#', },
            { label: 'Payment & ConsumptionSolutions', href: '#', },
        ]
    },
    {
        label: 'Support', href: '#',
        children: [
            { label: 'Support Home', href: '#', },
            { label: 'Support Library', href: '#', },
            { label: 'Support Services & Warranty', href: '#', },
            { label: 'Drivers & Downloads', href: '#', },
            { label: 'Manuals & Documentation', href: '#', },
            { label: 'Diagnostics & Tools', href: '#', },
            { label: 'Service Requests & Dispatch Status', href: '#', },
            { label: 'Order Support', href: '#', },
            { label: 'Contact Support', href: '#', },
            { label: 'Community', href: '#', },
        ]
    },
    {
        label: 'Deals', href: '#',
        children: [
            { label: 'View All Deals', href: '#', },
            { label: 'Laptop Deals', href: '#', },
            { label: 'Desktop Deals', href: '#', },
            { label: 'XPS Laptop Deals', href: '#', },
            { label: 'Latitude Laptop Deals', href: '#', },
            { label: 'Workstation Deals', href: '#', },
            { label: 'Budget Laptop Deals', href: '#', },
            { label: 'Server, Storage & Networking Deal', href: '#', },
            { label: 'Monitor Deals', href: '#', },
            { label: 'Computer Accessories Deals', href: '#', },
            { label: 'Product Information & Marketing', href: '#', },
        ]
    },
]

export const Navbar = () => {
    const [data, setData] = useState([])
    const { name, updateSearchData, searchStr, updateSearchStr } = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const debounceSearch = useCallback(debounce((query) => {
        if (query.trim() !== "") {
            axios.get(`https://cute-red-angelfish-tutu.cyclic.app/products?q=${query}`)
                .then((res) => {
                    updateSearchStr(query);
                    updateSearchData(res.data);
                    navigate("/allProduct");
                })
        }
    }, 500), []);

    useEffect(() => {
        debounceSearch(search);
    }, [search, debounceSearch]);

    function debounce(func, delay) {
        let timer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }


    return (
        <Box style={style.navbar} className="shadow-4">

            <Flex justifyContent={"space-around"} alignItems="center" bgColor={"#fff"}>
                <Link to={"/"} onClick={() => setSearch("")}>
                    <Image src="./dell-tech.png" alt="name" width={"100px"} />
                </Link>

                <Flex justifyContent={"space-between"} alignItems="center" border={"1px solid gray"} width="30%" borderRadius={"5px"}>
                    <Input type={"text"} border={"none"} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Icon as={CiSearch} fontSize="30px" mr="2"></Icon>
                </Flex>

                <Flex justifyContent={"space-around"} width="30%">
                    <DesktopNav NAV_ITEMS={NAV_ITEMS} />
                </Flex>

            </Flex>

            <Flex justifyContent={"space-between"} width="50%" h={'30px'} m={'5px 20px'}>
                <DesktopNav NAV_ITEMS={menuItems} />
            </Flex>

        </Box>
    )
}



