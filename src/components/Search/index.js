import React from 'react'
import { SearchContainer, SearchContent, SearchTitle, SearchBar, SearchInput, Icon } from './SearchElements'

const Search = () => {
    return (
        <SearchContainer>
            <SearchContent>
                <SearchTitle>Lemmeknow</SearchTitle>
                <SearchBar>
                    <SearchInput placeholder="Search">
                    </SearchInput>
                    <Icon></Icon> {/*Activate the "clear all" button.*/}
                </SearchBar>
            </SearchContent>
        </SearchContainer>
    )
}

export default Search
