import styled from "styled-components";

export const Cards = styled.div`
    max-width: 1160px;
    margin: auto;
`;

export const Card = styled.img`
    max-width: 150px;
    margin: 15px;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
