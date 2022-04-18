import React, {useRef, useState} from 'react'
import { SearchContainer, Input, Icon, Wrapper } from './styles';
import {Close} from '../../styles'

const Search = ({ filterGyms }) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)
  
  const handleChange = (event) => {
    filterGyms(event.target.value)
  }

  const clearSearch = () => {
    filterGyms('')
    // Clear out the search input field
    inputEl.current.value = ''
    // Collapse search bar
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  console.log(inputEl.current)
  return (
    <>
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch}/>
        <Input ref={inputEl} type="text" name="Search" autoComplete="off" onChange={handleChange} />
        <Close onClick={clearSearch}/>
      </SearchContainer>
   </Wrapper>
  </>
  );
}

export default Search