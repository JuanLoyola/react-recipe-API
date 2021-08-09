import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: white;
  background-color: #172a46;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 0 5px  #000;
`;
const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
const AppIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 3px;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;
  border-radius: 5px;
`;
const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 200px;
  border-radius: 5px;
`;

export default {
  Container,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput
};
