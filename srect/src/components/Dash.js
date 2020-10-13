import React, { useState,useEffect } from "react";
import axios from "axios";

const Dash = () => {
  const [datas, setData] = useState([]);
  const [prod, setProd] = useState([]);
  useEffect(()=>{
    check('Mobile phones')
    axios.get("http://localhost:1337/categories").then((response) => {
      console.log("cat",response.data);
      setData(response.data);
     
    });
   
  },[])
 
  function check(v){
    const value =v
    datas.map((cat)=>{
      if(value===cat.Name){
        console.log("compare",cat.products)
        setProd(cat.products)
        console.log(prod)
      }
    })
  }
  
  return (
   
    <div>
      {datas.map((cat)=>
         <button onClick={() => check(cat.Name)} key={cat.id}>{cat.Name}</button>
      )}
      
      {prod.map((p)=>(<h2 key={p.id}>{p.Title}</h2>))}

      
       </div>
  );
};

export default Dash;
