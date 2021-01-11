import styled from "styled-components";

export const Button = styled.button`
    margin-top: 1vh;
    margin: 0 0.5vw;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    border: 0;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    transition: .1s;    
    &:hover {
        opacity: .8;
    }

`;

export const Content = styled.div`
    width: 50vw;
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;
