import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

  const [search, setsearch] = useState('')

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://gym-fit.p.rapidapi.com/exercises', exerciseOptions);

      console.log(exercisesData);
    }
  }

  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }} mb='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should know
      </Typography>
      <Box>
        <TextField 
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '850px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises