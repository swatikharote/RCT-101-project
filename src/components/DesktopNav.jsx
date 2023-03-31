import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as DomLink } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { useContext, useEffect } from 'react';


export default function DesktopNav() {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const { name, isAuth } = useContext(AuthContext);


  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} display={isAuth}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={DomLink}
                to={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                onClick={(e) => e.preventDefault()}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} name={name} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))
      }
    </Stack >
  );
};

const DesktopSubNav = ({ label, href, subLabel, name }) => {
  return (
    <Link
      as={DomLink}
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Flex>
            {/* <Icon as={JSON.parse(icon)} fontSize="30px"></Icon> */}
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label !== '' ? label : name}
            </Text>
          </Flex>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};


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
    label: '',
    show: false,
    children: [
      {
        label: 'Log out',
        subLabel: '',
        href: '/',
      }
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


const SIGN_OUT =
{
  label: '',
  show: true,
  children: [
    {
      label: 'Log out',
      subLabel: '',
      href: '/',
    }
  ],
}