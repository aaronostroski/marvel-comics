import styled from "styled-components";

import ContainerType from "../types/Container";

export const Section = styled.section`
    max-width: ${({ theme }: { theme: ContainerType }) => theme.containerLg};
    margin: 35px auto;
`;
