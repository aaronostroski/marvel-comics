import styled from "styled-components";

export const BoxCreators = styled.div`
    padding: 80px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "
    info cards cards cards
    ";
    column-gap: 0px;
    align-items: center;
`;

export const Cards = styled.div`
    grid-area: cards;
    padding: 20px
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.div`
    grid-area: info;
    text-align: center;
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fontFamilyTitle};
    font-size: 33.6px;
    font-weight: 600;
    color: #fff;
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fontFamilyDescription};
    font-size: 16px;
    color: #fff;
    padding: 20px 0;
`;

export const SeeCreators = styled.button`
    align-self: center;
    text-align: center;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.colorSecondaryApp};
    color: ${({ theme }) => theme.colorSecondaryApp};
    font-size: 15px;
    transition: all 0.15s ease-out;
    cursor: pointer;
    height: 46px;
    padding: 0 28px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 12.8px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export const Card = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        "avatar name name"
        "highlight highlight highlight"
        "see-details see-details see-details";
    column-gap: 5px;
    max-width: 250px;
    border-radius: 6px;
    padding: 20px;
    background: #fff;
    max-height: 250px;
    align-items: center;
    row-gap: 10px;
    margin: 0 10px;
`;
export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    z-index: 20;
`;

export const Name = styled.p`
    text-align: center;
    grid-area: name;
    font-size: 16px;
    color: #000;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontFamilyAuthor};
`;
export const LineCircle = styled.div`
    grid-area: avatar;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: solid 3px #ff0000;
    z-index: 20;
`;

export const Highlight = styled.div`
    grid-area: highlight;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NumberTitle = styled.span`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamilyCharacterName}, cursive;
`;
export const NumberIcon = styled.img`
    width: 32px;
    height: 32px;
`;

export const Numbers = styled.span`
    margin-top: 2px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamilyCharacterName}, cursive;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
