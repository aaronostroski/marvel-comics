import styled from "styled-components";

export const Button = styled.button`
    align-self: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colorPrimaryApp};
    border: solid 1px ${({ theme }) => theme.colorPrimaryApp};
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
