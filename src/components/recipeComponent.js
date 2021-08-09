import styled from "styled-components";

const RecipeContainer = styled.div`
  width: 300px;
  background-color: #172a46;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0 0 2px  #333;
  font-family: 'Roboto', sans-serif;
`;

const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const RecipeName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #93a0be;
  margin: 10px 0;
`;

const IngredientsText = styled.div`
  font-size: 1.2rem;
  border: solid 1px #5d6c8a;
  color: #5d6c8a;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 12px;
`;

const SeeMoreText = styled(IngredientsText)`
  color: #5d6c8a;
  border: solid 1px #5d6c8a;
`;

export default {
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
}
