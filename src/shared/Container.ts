import styled from "styled-components";

import ContainerType from "../types/Container";

export const Container = styled.div`
    margin: auto;
    max-width: ${({ theme }: { theme: ContainerType }) => theme.containerLg};
`;
