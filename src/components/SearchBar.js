import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles({
  form: {
    all: "initial"
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

const SearchBar = props => {
  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    props.setQuery(search);
    setSearch("");
  };
  const classes = useStyles();
  return (
    <form onSubmit={getSearch} className={classes.form}>
      <Paper className={classes.root}>
        <InputBase className={classes.input} placeholder="Search Recipes..." inputProps={{ "aria-label": "search recipes" }} value={search} onChange={updateSearch} />
        <IconButton className={classes.iconButton} aria-label="search" type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default SearchBar;
