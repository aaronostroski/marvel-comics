import styled, { keyframes } from "styled-components";

const moveCard = keyframes`
    0% {
        top: 100px;
        opacity: 0;
    } 
    100% {
        top: 0;
        opacity; 1;
    }
`;
export const Cards = styled.div`
    position: relative;
    animation: ${moveCard} 0.5s ease;
`;

export const Card = styled.div`
    width: fit-content;
    cursor: pointer;
`;

export const ImageCharacter = styled.img`
    width: 232px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.7s ease;

    &:hover {
        transform: scale(1.02);
    }
`;
