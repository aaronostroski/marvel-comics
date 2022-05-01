import styled from "styled-components";

export const Navbar = styled.nav`
    height: 96px;
`;

export const NavbarRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
`;

export const Item = styled.a`
    font-weight: 600;
    font-size: 16px;
    color: ${(props: any) => props.theme.colorPrimarytApp};
    cursor: pointer;
    margin-right: 20px;

    &:after {
        content: "";
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        background: transparent;
        transition: width 0.5s ease, background-color 0.5s ease;
    }

    &:hover:after {
        width: 100%;
        background: ${(props: any) => props.theme.colorPrimarytApp};
    }

    &.active {
        border: solid 1px ${(props: any) => props.theme.colorPrimarytApp};
    }
`;

export const Brand = styled.div`
    cursor: pointer;
    margin-right: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    img {
        height: 54px;
    }

    h1 {
        margin-top: 5px;
        color: #000;
        font-family: ${(props: any) => props.theme.fontFamilyBrand};
        font-size: 20px;
    }
`;
