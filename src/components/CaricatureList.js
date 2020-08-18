import React from 'react';
import Caricature from "./Caricature"

   
const CaricatureList = (props) => (
  props.data.map(item => (
      <Caricature 
      	key={item.id} 
        img={item.img}
        header={item.header}
      />

  ))  
);


export default CaricatureList