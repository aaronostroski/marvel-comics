import styled from "styled-components";

export const Navbar = styled.nav`
    height: 96px;
    padding: 15px 0;
    box-shadow: 0 2px 0 0 rgb(0 0 0 / 3%);
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
    color: ${(props: any) => props.theme.colorPrimaryApp};
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
        background: ${(props: any) => props.theme.colorPrimaryApp};
    }

    &.active {
        border: solid 1px ${(props: any) => props.theme.colorPrimaryApp};
    }
`;

export const Brand = styled.div`
    cursor: pointer;
    margin-right: 20px;
    transition: transform 0.3s ease;
    text-align: center;

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
