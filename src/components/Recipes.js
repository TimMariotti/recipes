import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import style from "./css/recipe.module.css";
import Chip from "@material-ui/core/Chip";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const Recipe = ({ recipe }) => {
  recipe = recipe.recipe;
  let { image, label, calories, healthLabels, shareAs } = recipe;
  let servingSize = recipe.yield;
  return (
    <ThemeProvider theme={theme}>
      <Paper className={style.root}>
        <img className={style.image} src={image} alt="" />
        <h1 className={style.title}>{label}</h1>
        <div className={style.calories}>
          <p>Calories: {calories.toFixed(0)}</p>
          <p>Serves {servingSize}</p>
        </div>

        <Grid container className={style.labels} spacing={1}>
          {healthLabels.map(label => (
            <Grid item xs={6}>
              <Chip className={style.chip} label={label} />
            </Grid>
          ))}
        </Grid>
        <Button className={style.recipeLink} fullWidth="true" color="primary" href={shareAs}>
          Go to Recipe
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default Recipe;
