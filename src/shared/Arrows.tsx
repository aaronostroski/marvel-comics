import React, { ReactElement } from "react";
import styled from "styled-components";

import nextArrowIcon from "../assets/next-arrow.svg";
import prevArrowIcon from "../assets/prev-arrow.svg";

const PrevArrow = React.memo(
    ({
        onClick,
        ableLateralArrows
    }: {
        onClick: any;
        ableLateralArrows?: boolean;
    }) => {
        return (
            <>
                {ableLateralArrows ? (
                    <LateralArrows
                        onClick={onClick}
                        nameClass="prev-arrow"
                        icon={prevArrowIcon}
                    />
                ) : (
                    <TopArrows
                        onClick={onClick}
                        nameClass="prev-arrow"
                        icon={prevArrowIcon}
                    />
                )}
            </>
        );
    }
);

const NextArrow = React.memo(
    ({
        onClick,
        ableLateralArrows
    }: {
        onClick: any;
        ableLateralArrows?: boolean;
    }) => {
        return (
            <>
                {ableLateralArrows ? (
                    <LateralArrows
                        onClick={onClick}
                        nameClass="next-arrow"
                        icon={nextArrowIcon}
                    />
                ) : (
                    <TopArrows
                        onClick={onClick}
                        nameClass="next-arrow"
                        icon={nextArrowIcon}
                    />
                )}
            </>
        );
    }
);

const LateraLButton = styled.button<any>`
    background-color: transparent;
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

const TopButton = styled.a<any>`
    width: 40px;
    height: 31px;
    display: block;
    border-radius: 3px;
    border: 1px solid #fff;
    background: #fff;
    transition: all 0.15s ease-out;
    width: 51px;
    height: 51px;
    z-index: 20;
    position: absolute;
    top: -60px;

    &:before {
        width: 7px;
        height: 7px;
        display: block;
        content: "";
        position: absolute;
        top: 11px;
        left: 14px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(45deg);
    }
    &.prev-arrow {
        right: 60px;
    }

    &.next-arrow {
        right: 10px;
    }
`;

function LateralArrows({
    onClick,
    nameClass,
    icon
}: {
    onClick: any;
    nameClass: string;
    icon: string;
}): ReactElement {
    return (
        <LateraLButton onClick={onClick} className={nameClass}>
            <img src={icon} />
        </LateraLButton>
    );
}

function TopArrows({
    onClick,
    nameClass,
    icon
}: {
    onClick: any;
    nameClass: string;
    icon: string;
}): ReactElement {
    return (
        <TopButton onClick={onClick} className={nameClass}>
            <span>Próximo</span>
        </TopButton>
    );
}

export { NextArrow, PrevArrow };
