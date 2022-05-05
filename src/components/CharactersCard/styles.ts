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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 60px;
`;

export const Card = styled.div`
    position: relative;
    height: 350px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    animation: ${moveCard} 0.6s ease-out;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
export const CharacterName = styled.h3`
    font-size: 30px;
    font-family: ${({ theme }) => theme.fontFamilyCharacterName}, cursive;
    color: #344055;
    text-transform: uppercase;
`;
export const Description = styled.p`
    padding: 20px 0;
    font-family: ${({ theme }) => theme.fontFamilyDescription};
    font-size: 16px;
    text-align: center;
    color: #7d7d7d;
    flex-grow: 2;
`;
export const Info = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    max-width: 320px;
`;

export const SeeDetails = styled.button`
    align-self: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colorPrimaryApp};
    border: solid 1px ${({ theme }) => theme.colorSecondaryApp};
    color: ${({ theme }) => theme.colorSecondaryApp};
    font-size: 15px;
    transition: all 0.15s ease-out;
    cursor: pointer;
    height: 46px;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    etter-spacing: 1px;

    &:hover {
        background-color: ${({ theme }) => theme.colorSecondaryApp};
        color: ${({ theme }) => theme.colorPrimaryApp};
        border: solid 1px ${({ theme }) => theme.colorPrimaryApp};
    }

    &::before {
        content: ">";
        margin-right: 10px;
    }
`;
export const ImageCharacter = styled.img`
    width: 232px;
`;
