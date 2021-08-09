import React, { useState } from "react";
import "./style.css";
import Axios from "axios";
import styled from "styled-components";
// material-ui
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
// components
import Header from "./components/headerComponent";
import Recipe  from "./components/recipeComponent";

// API SETUP
const APP_ID = "d5e9cf76";
const APP_KEY = "fc3db1cb81f24d42d8b98b5ba77d8e66";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0a192f;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 30px;
  gap: 20px;
`

const Placheholder = styled.img `
  width: 150px;
  height: 150px;
  margin: 200px;
  opacity: 20%;
`

const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false);
  const { recipeObj } = props;

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </Recipe.IngredientsText>
          <Recipe.SeeMoreText onClick={() => setShow("")}>Close</Recipe.SeeMoreText>
        </DialogActions>
      </Dialog>

      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See complete recipe
        </Recipe.SeeMoreText>
      </Recipe.RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header.Container>
        <Header.AppNameComponent>
          <Header.AppIcon src="/hamburger.svg" />
          Recipe Finder
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="/search-icon.svg" />
          <Header.SearchInput placeholder="Search recipe" onChange={onTextChange} />
        </Header.SearchComponent>
      </Header.Container>

      <RecipeListContainer>
          {recipeList.length ?
            recipeList.map((recipeObj) => (
              <RecipeComponent recipeObj={recipeObj.recipe} />
            )): <Placheholder src="/hamburger.svg"/>}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
