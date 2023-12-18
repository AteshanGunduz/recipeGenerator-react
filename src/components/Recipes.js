import { useState } from "react"


const Recipes = ({handleValue, data, fetchData}) => {
    const [value, setValue] = useState("")

    const handleClick = ()=>{
        handleValue(value);
        fetchData();
    }

  return (
    <div className="container">
    <div>
      <h2>Recipe Generator</h2>
    </div>
    <div className="quote-container">
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <button onClick={handleClick}>Get Recipes</button>
    </div>
    <div className="recipe-container">
    {data.map((data, index) => (
          <div key={index} className="recipes">
            <h2>{data.recipe.label}</h2>
            <p>Yield: {data.recipe.yield}</p>
            <img
              src={data.recipe.images.SMALL.url}
              alt={data.recipe.label}
            />
            <ul>
              {data.recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </div>
  )
}
export default Recipes