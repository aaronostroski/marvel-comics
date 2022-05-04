import styled from "styled-components";

import nextArrowIcon from "../assets/next-arrow.svg";
import prevArrowIcon from "../assets/prev-arrow.svg";

const Button = styled.button`
    width: 51px;
    height: 51px;
    z-index: 20;

    &.prev-arrow {
        left: -10px;
    }

    &.next-arrow {
        right: -10px;
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
