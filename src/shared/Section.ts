import styled from "styled-components";

import ContainerType from "../types/Container";

export const Section = styled.section<any>`
    max-width: ${({ theme }: { theme: ContainerType }) => theme.containerLg};
    margin: 25px auto;
    background-image: url("${({ backgroundImage }) =>
        backgroundImage ? backgroundImage : ""}");
    background-repeat: no-repeat;
    background-size: cover;
`;
