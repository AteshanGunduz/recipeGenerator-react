import { useState, useEffect } from "react"
import Recipes from "./Recipes"


const App = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("");


    const handleValue = (value)=>{
      setQuery(value)
    }

     
    const fetchData = async()=>{
      try {
        const url =  `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=e23501d5&app_key=b7bf1aa457d8bad4a19756d053885159`
        const res = await fetch(url);
        const data = await res.json();
        setData(data.hits);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    }

    useEffect(() => {
        fetchData();
      }, [query]); 
    
      console.log(data);


    

    return (
      <div className="bigbox">
     <Recipes handleValue={handleValue} data={data} fetchData={fetchData}/>
     </div>
   
    )
  }
  export default App