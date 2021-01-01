import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
`;

export const Content = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-top:25px;

    h1 {
        font-size: 50px;
        font-family:'Roboto';
        color: #75757A;
        margin: 20px auto 30px;

    }

    button {
        font-family:'Roboto';
        color: white;
        background:  #f1592a;
        border: 0;
        padding: 13px;
        border-radius: 5px;
        outline: none;
        transition: .1s;
        margin-left: 53vw;     

        &:hover {
            opacity: .8;
        }
    }

`;