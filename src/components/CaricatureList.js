import React from 'react';
import Caricature from "./Caricature"

   
const CaricatureList = (props) => (
  props.data.filter(item => item.col === props.col).map(item => (
      <Caricature 
      	key={item.id} 
        img={item.img}
        header={item.header}
      />

  ))  
);


export default CaricatureList