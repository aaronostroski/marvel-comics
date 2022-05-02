import styled from "styled-components";

import leftIcon from "../assets/left-icon.svg";
import rightIcon from "../assets/right-icon.svg";

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
            <img src={leftIcon} alt="Left Arrow" />
        </Button>
    );
}

export function NextArrow({ onClick }: { onClick: any }) {
    return (
        <Button onClick={onClick} className="next-arrow">
            <img src={rightIcon} alt="Rigth Arrow" />
        </Button>
    );
}
