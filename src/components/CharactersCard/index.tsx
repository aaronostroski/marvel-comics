import { ReactElement } from "react";

import americaCaptainIcon from "../../assets/america-captain.svg";
import { Container } from "../../shared/Container";
import ContentTitle from "../../shared/ContentTitle";
import { Section } from "../../shared/Section";
import ContentTitleType from "../../types/ContentTitle";
import {
    Card,
    Cards,
    CharacterName,
    Description,
    ImageCharacter,
    Info,
    SeeDetails
} from "./styles";

export default function CharactersCard(): ReactElement {
    const propsContentTitle: ContentTitleType = {
        title: "Personagens",
        src: americaCaptainIcon,
        alt: "Personagens"
    };

    return (
        <Section>
            <Container>
                <ContentTitle {...propsContentTitle} />
                <Cards>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                    <Card>
                        <Info>
                            <CharacterName>Homem aranha</CharacterName>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempo r
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </Description>
                            <SeeDetails>Ver detalhes</SeeDetails>
                        </Info>
                        <ImageCharacter
                            className="cardImage"
                            src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
                        />
                    </Card>
                </Cards>
            </Container>
        </Section>
    );
}
