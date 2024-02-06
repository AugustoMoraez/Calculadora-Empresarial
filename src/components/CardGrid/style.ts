import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    background-color: #00bf63;
    margin: auto;
    border-radius: 10px;
    color:#ffffff;
    padding:10px;
    h2{
        padding: 5px 5px 5px 0px;
        cursor: default;
    }
    p{
        margin-bottom: 20px;
        cursor: default;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100px;
        color:#000;
        text-decoration: none;
        background-color: #fff;
        padding: 3px 10px;
        border-radius: 20px;

        &:hover{
            opacity: 0.9;
            transition: 200ms;
        }
        
    }

`; 