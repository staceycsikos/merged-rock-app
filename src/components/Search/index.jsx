import React from 'react'
import { SearchContainer, Input } from './styles';

const Search = () => {
  return (
    <>
   <SearchContainer>
      <Input type="text" name="Search" autoComplete="off"/>
  </SearchContainer>

  </>
  );
}

export default Search