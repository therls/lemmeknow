import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const SearchContainer = styled.div`
    background: #231651;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* May need more, come back */
`

export const SearchContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchTitle = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    cursor: default;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const SearchBar = styled.form`
    position: relative;
    width: 100%;
    display: flex;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 8px 16px;
    padding-right: 48px;
    margin: 8px 0;
    border: none;
    background: #F7D002;
    border-radius: 4px;
    display: inline-block;
    color: #231651;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    ::placeholder {
        color: #231651;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
    } 
`

export const Icon = styled(FaSearch)`
    color: #231651;
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 18px;
    height: 18px;
    

    @media screen and (max-width: 768px) {
        
        width: 14px;
        height: 14px;
    }

    &:hover {
        cursor: pointer;
        color: #5945A0;
    }
`