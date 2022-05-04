import { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import americaCaptainIcon from "../../assets/america-captain.svg";
import { NextArrow, PrevArrow } from "../../shared/Arrows";
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

    const settingsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        autoplay: false,
        slidesToShow: 5,
        className: "center",
        nextArrow: <NextArrow onClick />,
        prevArrow: <PrevArrow onClick />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "25px"
                }
            }
        ]
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
                </Cards>
            </Container>
        </Section>
    );
}
