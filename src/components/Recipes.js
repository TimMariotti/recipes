import React from "react";


const Recipe = ({ title, calories, image, ingredients }) => {
  return (
      {/*Convert Div tag to Paper from Material UI*/}
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
