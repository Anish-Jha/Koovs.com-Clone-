import React from 'react'
import { Flex, Container, Center, Box, Menu,MenuItem, Avatar, AvatarBadge, Heading,} from "@chakra-ui/react";
import insta from "./images/640px-Instagram_icon.png";
import {BiChevronDown} from 'react-icons/bi';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsPerson,BsSearch} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "./images/fashionHub.png"
import { useDisclosure } from "@chakra-ui/react";
import {
    useColorModeValue,
    MenuButton,
    MenuList,
    Stack
} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ChevronDownIcon, ChevronUpIcon,HamburgerIcon } from '@chakra-ui/icons';
import Mens_Image from "./images/Mens_image.webp";
import womens_Image from "./images/womens_image.webp";
import HamburgerMenu from './Hamburger';
import { Search2Icon } from '@chakra-ui/icons';
import {
    Button,
    
} from "@chakra-ui/react";
import {
    FaUserCircle,
    FaUser,
    FaTruckMoving,
    FaUserPlus,
    FaRegUser,
    FaSignOutAlt,
} from "react-icons/fa";
import { BsGift, BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


const Navbar = () => {
    const { isOpen:menu1, onOpen:menu1Open, onClose:menu1Close } = useDisclosure()
    const { isOpen, onOpen, onClose} = useDisclosure();
    const firstField = React.useRef();
    const navigateTo = useNavigate();
    const GoTo = (path) => {
        console.log("path", path);
        navigateTo(path);
    };
    const overlayRef = useRef();
    const openSearch = () => {
        overlayRef.current.style.width = '100%';
    };
    const closeSearch = () => {
        overlayRef.current.style.width = '0%';
      };


  return (
    <>
        
        <div className='mainNavbar' >
            <div className="UpperNavbar">
                <Flex justify={'space-between'} paddingRight={6}  paddingLeft={40} padding={1}>
                    <Container>
                        <Flex alignItems={'center'} gap={3} marginLeft={'20px'}>
                            <FaFacebookF/>
                            <p style={{fontSize:"15px",lineHeight:"22px",fontWeight:"550",marginRight:"20px"}}>1.8 M Followers</p>
                            <BsInstagram/>
                            <p style={{fontSize:"15px",lineHeight:"22px",fontWeight:"550"}}>682k followers</p>
                        </Flex>
                    </Container>
                    <Container >
                        <p  style={{fontWeight:"500",fontSize:"15px",lineHeight:'22px',padding:"5px"}}>Open doors to a world of fashion | Young and fresh</p>
                    </Container>
                    <Container display={'flex'} justifyContent={'flex-end'}>
                        <p style={{fontSize:"14px"}}>English</p>
                        <BiChevronDown/>
                    </Container>
                </Flex>   
            </div>
            <div style={{height:"1px",width:"100%",borderBottom:"1px solid grey",borderColor:"#EEEEEE"}}></div>
            <div className='LowerNavbar'>
                <Flex>
                    <Container >
                        <Flex className='LowerNavCont'>
                            <Menu isOpen={menu1} >
                                <MenuButton
                                    variant="unstyled"
                                    fontSize={'14px'}
                                    fontWeight={'600'}
                                    mx={1}
                                    py={[1, 2, 2]}
                                    px={4}
                                    borderRadius={5}
                                    // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                    aria-label="Courses"
                                    onMouseEnter={menu1Open}
                                    onMouseLeave={menu1Close}
                                >
                                    Mens {menu1Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </MenuButton>
                                <MenuList onMouseEnter={menu1Open} onMouseLeave={menu1Close}>
                                    <Box style={{width:"70vw", height:"70vh"}}>
                                        <Flex>
                                            <Box style={{ width:"70%"}}>
                                                <Flex justify={"space-between"} style={{padding:"10px"}}>
                                                    <Box style={{fontSize:"12px", fontWeight:"800"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Clothing</MenuItem>
                                                        <MenuItem>New In</MenuItem>
                                                        <Link to='/product'>
                                                        <MenuItem>View All</MenuItem>
                                                        </Link>
                                                        <MenuItem>T-Shirts</MenuItem>
                                                        <MenuItem>Jackets & Coats</MenuItem>
                                                        <MenuItem>Hoodies & Sweatshirts</MenuItem>
                                                        <MenuItem>Sweatpants</MenuItem>
                                                        <MenuItem>Shorts</MenuItem>
                                                        <MenuItem>Co-ords sets</MenuItem>
                                                    </Box>
                                                    <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Brand</MenuItem>
                                                        <MenuItem>Essentials by Fashion Hub</MenuItem>
                                                        <MenuItem>Nike</MenuItem>
                                                        <MenuItem>TigerBear</MenuItem>
                                                        <MenuItem>Bravesoul</MenuItem>
                                                        <MenuItem>Adidas</MenuItem>
                                                    </Box>
                                                    <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Fashion Hub Speacials</MenuItem>
                                                        <MenuItem>Manish Malhotra</MenuItem>
                                                        <MenuItem>Sabyasachchi</MenuItem>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                            <Box style={{textAlign:"center"}}>
                                                <img src={Mens_Image} className="imageMens"  alt="" />
                                            </Box>
                                        </Flex>
                                    </Box>
                                </MenuList>
                            </Menu>
                            <Menu isOpen={isOpen} >
                                <MenuButton
                                    variant="Ghost"
                                    mx={1}
                                    py={[1, 2, 2]}
                                    px={4}
                                    borderRadius={5}
                                    // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                    aria-label="Courses"
                                    fontSize={'14px'}
                                    fontWeight={'600'}
                                    onMouseEnter={onOpen}
                                    onMouseLeave={onClose}
                                >
                                    Womens {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </MenuButton>
                                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                    <Box style={{width:"70vw", height:"70vh"}}>
                                        <Flex>
                                            <Box style={{ width:"70%"}}>
                                                <Flex justify={"space-between"} style={{padding:"10px"}}>
                                                    <Box style={{fontSize:"12px", fontWeight:"800"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Clothing</MenuItem>
                                                        <MenuItem>New In</MenuItem>
                                                        <MenuItem>View All</MenuItem>
                                                        <MenuItem>Lounge & Sleepware</MenuItem>
                                                        <MenuItem>Lingerie & innerwear</MenuItem>
                                                        <MenuItem>Sweatshirts</MenuItem>
                                                        <MenuItem>Sports bra</MenuItem>
                                                        <MenuItem>Bodysuits</MenuItem>
                                                        <MenuItem>Outerwear</MenuItem>
                                                        <MenuItem>Jeans</MenuItem>
                                                        <MenuItem>Shorts</MenuItem>
                                                        <MenuItem>T-Shirts</MenuItem>
                                                        <MenuItem>Lagging</MenuItem>
                                                        <MenuItem>Pants</MenuItem>
                                                    </Box>
                                                    <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Brand</MenuItem>
                                                        <MenuItem>Essentials by Fashion Hub</MenuItem>
                                                        <MenuItem>Nike</MenuItem>
                                                        <MenuItem>TigerBear</MenuItem>
                                                        <MenuItem>Bravesoul</MenuItem>
                                                        <MenuItem>Adidas</MenuItem>
                                                    </Box>
                                                    <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                        <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Shoes</MenuItem>
                                                        <MenuItem>New In</MenuItem>
                                                        <MenuItem>View All</MenuItem>
                                                        <MenuItem>Sneakers</MenuItem>
                                                        <MenuItem>Heels</MenuItem>
                                                        <MenuItem>Sliders & flip flops</MenuItem>
                                                        <MenuItem>Boots</MenuItem>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                            <Box style={{textAlign:"center"}}>
                                                <img src={womens_Image} className="imageMens"  alt="" />
                                            </Box>
                                        </Flex>
                                    </Box>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Container>
                    <Container >
                        <div style={{textAlign:"center",marginLeft:"10%"}}>
                           <Link to='/'>
                           <Heading padding={'10px'}>Fashion Hub</Heading>
                           </Link>
                        </div>
                    </Container>
                    <Container height="80%" m={'auto'}>
                        <Flex justify={"space-between"} ml="34%">

                            <Stack
                                flex={{ base: 1, md: 0 }}
                                justify={"flex-end"}
                                direction={"row"}
                                
                                >
                                <Button variant={'unstyled'}   fontSize={'22px'} onClick={openSearch} >
                                    <BsSearch/>
                                </Button>
                                <Button onClick={() => GoTo("/SignIn")} variant={'unstyled'}   fontSize={'24px'} fontWeight={'500'}>
                                    <BsPerson/>
                                </Button>
                                <Button variant={'unstyled'} marginLeft={'-10px'}   fontSize={'24px'}>
                                    <AiOutlineStar/>
                                </Button>
                                <Link to='/cart'>
                                <Button
                                    display={{ base: "none", md: "inline-flex" }}
                                    textAlign="center"
                                    fontWeight={"bold"}
                                    gap={2}
                                    variant={'unstyled'}
                                    cursor="pointer"
                                    fontSize={{ xl: "25px", lg: "16px", md: "13px", base: "10px" }}
                                    onClick={() => GoTo("")}
                                    color={"black"}
                                    >
                                    <BiShoppingBag color={"black"}/>
                                </Button>
                                </Link>
                            </Stack>  
                        </Flex>
                    </Container>
                </Flex>
                <div ref={overlayRef} class='overlay'>
                    <button class='close-button' onClick={closeSearch}>
                    &times;
                    </button>
                    <div class='overlay-content'>
                    <form>
                        <input
                        type='search'
                        placeholder='Search Fashion Hub.com...'
                        className='search-input'
                        />
                        <button
                        className='search-button'
                        onClick={() => {
                            console.log('Hi there');
                            /* Your search logic here */
                        }}
                        >
                        Go
                        </button>
                        <p className='search-text'>
                        Search your newest trends 
                        </p>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar