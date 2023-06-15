import React from 'react'
import {Link} from 'react-router-dom'
import {Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around" sx={{gap: {sm: '123px', xs:'40px'}, mt: { sm: '32px', xs:'20px'}, justifyContent:'none'}} px="20px">
      <Typography  color="#2E7D32" fontWeight='600' fontSize='26px' width='48px' height="-30px" margin="0 20px" sx={{ width: {sm:'40px'}, mt: {sm:"32px"}}}> PowerPulse </Typography>
      <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration: 'none', color: "#000", borderBottom: "3px solid #2E7D32"}} >
        Home
        </Link>
        <a href="#exercises" style={{textDecoration: 'none', color: "#000"}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar