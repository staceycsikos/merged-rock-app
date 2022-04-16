import React from 'react'
import { SearchContainer, Input } from './styles';

const Search = ({filterGyms}) => {
  const handleChange = (event) => {
    event.prevent.default();
    filterGyms(event.target.value)
  }
  
  return (
    <>
   <SearchContainer>
        <Input type="text" name="Search" autoComplete="off" onChange={handleChange}/>
  </SearchContainer>

  </>
  );
}

export default Search