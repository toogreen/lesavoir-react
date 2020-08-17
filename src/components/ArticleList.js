import React from 'react';
import Article from "./Article"
   
const ArticleList = (props) => (
    props.db.filter(item => item.col === props.col).map(item => (
        <Article 
			   key={item.id} 
			header={item.header}
		   	news={item.news}
		    title={item.title}
		    img={item.img}
		    desc={item.desc}
		    classtype={item.class}
			url={item.url}
			source={item.source}
        />
    ))  
);


export default ArticleList