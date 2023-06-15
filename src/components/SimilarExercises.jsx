import React from 'react'
import Loader from './Loader';
import { Box, Stack, Typography} from '@mui/material'

const SimilarExercises = (targetMuscleExercises, equipmentExercises) => {
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Exercises <span style={{ color: '#2E7D32', textTransform: 'capitalize' }}> that target similar muscle groups</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Exercises <span style={{ color: '#2E7D32', textTransform: 'capitalize' }}> that use the same Equipment</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
}

export default SimilarExercises