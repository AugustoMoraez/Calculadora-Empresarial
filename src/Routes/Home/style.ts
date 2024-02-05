import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.h2`
    margin-top: 50px;
    border-top: 1px solid #e3e3e3;
    font-weight: 100;
    font-style:italic;
    @media (max-width:450px) {
        font-size: 18px;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
    justify-content: center;
    align-items: center;
    padding: 10px;



`;