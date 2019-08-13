import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./components/Recipes";
import SearchBar from "./components/SearchBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import "./App.css";
const App = () => {
  const appID = "d42f2335";
  const appKey = "3e8728e8f60b5def821520f83d1f2e1c";

  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&from=0&to=12`);
    const data = response.data;
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <Container maxWidth="sm" className="SearchForm">
        <SearchBar setQuery={setQuery} />
      </Container>
      <Container maxWidth="lg">
        <div className="GridFlex">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} recipe={recipe} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
