import React from 'react';

   
const variablesList = (props) => (
  props.data.map(item => (

  	//document.getElementById(item.name).innerHTML = item.value
  	//alert(item.value)
  	<p>{item.name} {item.value}</p>
  ))  
);


export default variablesList