import { React, useState, useEffect } from 'react';

import { Grid2 as Grid} from '@mui/material';

import { getRandomDogs, getRandomDogsBatch } from '../../services/Dog/DogData';
import ImageTile from '../shared/ImageTile/ImageTile';

const NUMBER_OF_DOGS = 25

function Home()  {
   const [dogs, setDogs] = useState([]);

   useEffect(() => {
      const getRandomDogsData = async () => {
         // const randomDogData = await getRandomDogs(NUMBER_OF_DOGS);
         const randomDogData = await getRandomDogsBatch(NUMBER_OF_DOGS); // Faster dogs!
         setDogs(randomDogData.message);
      };

      getRandomDogsData();
    }, []);

   const element = <>
      <Grid container spacing={2} padding={'20px'}>
         <Grid item sx={{ width: '100%' }}>
            <h1> Home is where the dogs are </h1>
         </Grid>
         { dogs.map((dog, index) => (
            <Grid item >
               <ImageTile imageUrl={dog} key={index}>
               </ImageTile>
            </Grid>
         ))}
      </Grid>
   </>

   return element;
};

export default Home;
