import styled from "styled-components";


type propModal = {
    display:string;
}

export const Modal = styled.div<propModal>`
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: ${propModal => propModal.display === "true" ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    
    img{
        border-radius: 20px;
        width: 100%;
        max-width: 1140px;
        padding: 5px;
        transition: 0.5s;
        cursor: pointer;
        
    }


`;
