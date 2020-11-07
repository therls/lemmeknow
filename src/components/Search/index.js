import React from 'react'
import { SearchContainer, SearchContent, SearchTitle, SearchBar, SearchInput, Icon } from './SearchElements'

const Search = () => {
    return (
        <SearchContainer>
            <SearchContent>
                <SearchTitle>Lemmeknow</SearchTitle>
                <SearchBar className="search" action="">
                    <SearchInput className="input" type="text" placeholder="Search">
                    </SearchInput>
                    <Icon type="submit"></Icon>
                </SearchBar>
            </SearchContent>
        </SearchContainer>
    )
}

export default Search
