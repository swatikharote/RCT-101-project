import React from "react";
import {
    Flex,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Button,
    useDisclosure
} from "@chakra-ui/react";

export default function HoverMenu({ menu, menuList }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="App">
            <Flex align="center" justifyContent="center" >
                <Menu isOpen={isOpen}>
                    <MenuButton
                        variant="solid"
                        colorScheme="teal"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                    >
                        {menu}
                    </MenuButton>
                    <MenuList onMouseEnter={onOpen}
                        onMouseLeave={onClose}>
                        {menuList?.map((item, i) => {
                            return <MenuItem key={i + item}>{item}</MenuItem>
                        })}
                    </MenuList>
                </Menu>
            </Flex>
        </div>
    );
}