import styled from "styled-components";

export const SearchBox = styled.div<any>`
    background-image: url(${(props: any) => props.urlImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 255px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SubTitle = styled.h2`
    color: #fff;
    font-size: 28px;
    margin-bottom: 10px;
`;

export const LabelSearch = styled.label`
    max-width: 800px;
    width: 100%;
    position: relative;
`;

export const SearchIcon = styled.img`
    position: absolute;
    top: 26px;
    left: 32px;
`;

export const InputSearch = styled.input`
    border-radius: 6px;
    height: 69px;
    padding: 0 20px 0px 80px;
    font-size: 100%;
    max-width: 800px;
    width: 100%;
`;

export const ButtonSearch = styled.button`
    position: absolute;
    top: 11px;
    right: 32px;
    border-radius: 6px;
    width: 96px;
    height: 46px;
    cursor: pointer;
    background-color: ${(props: any) => props.theme.colorPrimarytApp};
    color: ${(props: any) => props.theme.colorSecondaryApp};
    text-transform: uppercase;
    font-size: 12.8px;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover {
        opacity: 0.7;
    }
`;
