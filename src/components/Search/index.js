import React from 'react'
import { SearchContainer, SearchContent, SearchTitle, SearchBar, SearchInput, Icon } from './SearchElements'

const Search = () => {

    return (
        <SearchContainer>
            <SearchContent>
                <SearchTitle>Lemmeknow</SearchTitle>
                <SearchBar>
                    <SearchInput type="text" name="search" placeholder="Search">
                    </SearchInput>
                    <Icon></Icon>
                </SearchBar>
            </SearchContent>
        </SearchContainer>
    )
}

export default Search
