import React from 'react'
import {useState, useEffect} from 'react'


 const Products=({heading})=> {
    const [data, setData] = useState([])
    useEffect(()=>{ async function fetchData() {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log("Fetched data:", data);
            setData(data);
        }
        catch (error) {
            console.log(error);
        }
    } 
    fetchData()
},[])
   
  return (
    
    <div className='products'>
       
        <h1>{heading}</h1>
         <div className='cards'>
      {data.map((item, index) => (
       
        <div className="card mb-4" style={{ margin: "10px", padding: "20px" }} key={index}>
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "justify" }}>{item.title}</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>{item.description}</p>
            <p className="card-text"><strong>${item.price}</strong></p>
            <button className="btn btn-primary" data-id={item.id}>Add to Cart</button>
          </div>
        
        </div>
      ))}
      </div>
     
    </div>
  )
}

export default Products
