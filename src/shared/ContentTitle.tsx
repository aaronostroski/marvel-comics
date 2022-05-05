import { ReactElement } from "react";
import styled from "styled-components";

import ContentTitleType from "../types/ContentTitle";

export default function ContentTitle(props: ContentTitleType): ReactElement {
    return (
        <BoxContent>
            <Icon src={props.src} alt={props.alt} />
            <Title>{props.title}</Title>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    height: 28px;
    margin-right: 10px;
`;

const Title = styled.h2`
    color: ${(props: any) => props.theme.colorThirdApp};
    font-size: 28px;
    display: inline-block;
`;
