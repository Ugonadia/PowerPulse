import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Button} from "@mui/material"

import HeroBannerImage from "../assets/images/Banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt: { lg:'212px', xs: '70px'}, ml: { sm: '50px'} }} position="relative" p="20px">
        <Typography color="#2E7D32" fontWeight='600' fontSize='26px'>
            PowerPulse
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize:{ lg:'44px', xs:'40px'} }} mb="23px" mt="30px">
            Breathe, Sweat <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight='35px' mb={4}>
            Check out the most effective Exercises
        </Typography>
        <Button variant='contained' color='success' href="#exercises" sx={{ padding:'10px'}}>
            Find More Exercises
        </Button>
        <Typography fontWeight={600} color="#2E7D32" sx={{ opacity: 0.1, display: {lg:'block', xs: 'none'}, fontSize: "200px" }} >
            PowerPulse
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
