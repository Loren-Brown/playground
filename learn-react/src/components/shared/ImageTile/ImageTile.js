import React from 'react';
import Box from '@mui/material/Box';
import styles from './ImageTile.css'
import { Hidden } from '@mui/material';

function ImageTile(props){
  const imageUrl = props.imageUrl;
  
  const element = <>
    <Box sx={{width: 200, height: 200}}>
      <div className='wrapper'
        >
        <img 
          src={imageUrl} 
          />
      </div>
      
    </Box>
  </> 

  return element
};

export default ImageTile;
