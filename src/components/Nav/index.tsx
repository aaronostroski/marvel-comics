import { ReactElement } from "react";

import brandIcon from "../../assets/brand.svg";
import { Container } from "../../shared/Container";
import { Brand, Item, Navbar, NavbarRow } from "./styles";

export default function Nav(): ReactElement {
    return (
        <Navbar>
            <Container>
                <NavbarRow>
                    <Item>Personagens</Item>
                    <Item>Comics</Item>
                    <Brand>
                        <img src={brandIcon} />
                        <h1>Marvel Cave</h1>
                    </Brand>
                    <Item>Criadores</Item>
                    <Item>Séries</Item>
                </NavbarRow>
            </Container>
        </Navbar>
    );
}
