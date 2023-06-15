import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import { Box, Stack, Typography} from '@mui/material'
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Exercises <span style={{ color: '#2E7D32', textTransform: 'capitalize' }}> that target similar muscle groups</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
       {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
  </Box>
}

export default SimilarExercises;