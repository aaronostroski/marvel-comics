import { ReactElement } from "react";

import background1Image from "../../assets/background-1.jpg";
import serchIcon from "../../assets/search.svg";
import { Container } from "../../shared/Container";
import { Section } from "../../shared/Section";
import {
    ButtonSearch,
    InputSearch,
    LabelSearch,
    SearchBox,
    SearchIcon,
    SubTitle
} from "./style";

export default function Search(): ReactElement {
    return (
        <Section>
            <Container>
                <SearchBox urlImage={background1Image}>
                    <SubTitle>Tudo sobre o universo nerd Marvel!</SubTitle>
                    <LabelSearch htmlFor="q">
                        <SearchIcon src={serchIcon} alt="Buscar" />
                        <InputSearch
                            type="search"
                            name="q"
                            placeholder="Procure personagens, histórias, autores e mais ..."
                        />
                        <ButtonSearch type="submit">Buscar</ButtonSearch>
                    </LabelSearch>
                </SearchBox>
            </Container>
        </Section>
    );
}
