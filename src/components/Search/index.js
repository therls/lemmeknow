import React from 'react'
import { SearchContainer, SearchContent, SearchH1, SearchBar, SearchInput } from './SearchElements'

const Search = () => {
    return (
        <SearchContainer>
            <SearchContent>
                <SearchH1>Lemmeknow</SearchH1>
                <SearchBar>
                    <SearchInput placeholder="Search"></SearchInput>
                </SearchBar>
            </SearchContent>
        </SearchContainer>
    )
}

export default Search
