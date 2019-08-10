import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import style from "./css/recipe.module.css";
import Chip from "@material-ui/core/Chip";

const Recipe = ({ recipe }) => {
  recipe = recipe.recipe;
  let { image, label, calories, healthLabels } = recipe;
  return (
    <Paper className={style.root}>
      <img className={style.image} src={image} alt="" />
      <h1>{label}</h1>
      <p>Calories: {calories.toFixed(0)}</p>
      {healthLabels.map(label => (
        <Chip label={label} />
      ))}
    </Paper>
  );
};

export default Recipe;
