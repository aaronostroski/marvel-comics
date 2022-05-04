import styled from "styled-components";

import nextArrowIcon from "../assets/next-arrow.svg";
import prevArrowIcon from "../assets/prev-arrow.svg";

const Button = styled.button`
    background-color: #fff;
    width: 51px;
    height: 51px;
    z-index: 20;
    position: absolute;
    top: 40%;
    &.prev-arrow {
        left: -70px;
    }

    &.next-arrow {
        right: -70px;
    }
`;

export function PrevArrow({ onClick }: { onClick: any }) {
    return (
        <Button onClick={onClick} className="prev-arrow">
            <img src={prevArrowIcon} alt="Anterior" />
        </Button>
    );
}

export function NextArrow({ onClick }: { onClick: any }) {
    return (
        <Button onClick={onClick} className="next-arrow">
            <img src={nextArrowIcon} alt="Próximo" />
        </Button>
    );
}
