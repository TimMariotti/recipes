import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/Recipes";

import "./App.css";
const App = () => {
  const appID = "d42f2335";
  const appKey = "3e8728e8f60b5def821520f83d1f2e1c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = response.data;
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      {/**
        Need to replace this Form with Material UI Search Bar. 
        Using '@material-ui/core/InputBase' for input base 
        Using '@material-ui/icons/Search' for search icon]
      **/}
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch} />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
      ))}
    </div>
  );
};

export default App;
