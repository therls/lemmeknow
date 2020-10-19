import styled from 'styled-components'

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

export const SearchH1 = styled.h1`
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

export const SearchBar = styled.h2`
    color: #FF8484;
    font-size: 32px;
    text-align: center;
`