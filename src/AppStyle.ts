import styled from "styled-components";
import bg from "./assets/banner-01.png";

export const Container = styled.div`
    width: 100%;
    max-width:1140px;
    margin: auto;
`;
export const Banner = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    margin: 15px auto;
    background-repeat: no-repeat;
    background-image: url(${bg});
    background-position: center;
    background-size: contain;

   
`;
