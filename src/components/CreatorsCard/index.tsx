import { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import avatar from "../../assets/avatar.jpg";
import background4 from "../../assets/background-4.jpg";
import comicsIcon from "../../assets/comics.svg";
import seriesIcon from "../../assets/series.svg";
import storiesIcon from "../../assets/stories.svg";
import { NextArrow, PrevArrow } from "../../shared/Arrows";
import { Section } from "../../shared/Section";
import { SeeDetails } from "../CharactersCard/styles";
import {
    Avatar,
    BoxCreators,
    Card,
    Cards,
    Description,
    Group,
    Highlight,
    Info,
    LineCircle,
    Name,
    NumberIcon,
    NumberTitle,
    Numbers,
    SeeCreators,
    Title
} from "./style";

export default function CreatorsCard(): ReactElement {
    const settingsCarousel = {
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        nextArrow: <NextArrow onClick />,
        prevArrow: <PrevArrow onClick />,
        responsive: []
    };
    return (
        <Section backgroundImage={background4}>
            <BoxCreators>
                <Info>
                    <Title>Criadores de conteudo</Title>
                    <Description>
                        Saiba o que cada criador. Comics, series, personagens e
                        mais ...
                    </Description>
                    <SeeCreators>Veja os criadores</SeeCreators>
                </Info>
                <Cards>
                    <Slider {...settingsCarousel}>
                        <Card>
                            <LineCircle>
                                <Avatar src={avatar} alt="avatar" />
                            </LineCircle>
                            <Name>Vc Travis Lanham</Name>
                            <Highlight>
                                <Group>
                                    <NumberTitle>Comics</NumberTitle>
                                    <NumberIcon src={comicsIcon} alt="Comics" />
                                    <Numbers>1212</Numbers>
                                </Group>
                                <Group>
                                    <NumberTitle>Series</NumberTitle>
                                    <NumberIcon src={seriesIcon} alt="Comics" />
                                    <Numbers>1212</Numbers>
                                </Group>
                                <Group>
                                    <NumberTitle>Histórias</NumberTitle>
                                    <NumberIcon
                                        src={storiesIcon}
                                        alt="Comics"
                                    />
                                    <Numbers>1212</Numbers>
                                </Group>
                            </Highlight>
                            <SeeDetails>Ver mais</SeeDetails>
                        </Card>
                        <Card>
                            <LineCircle>
                                <Avatar src={avatar} alt="avatar" />
                            </LineCircle>
                            <Name>Vc Travis Lanham</Name>
                            <Highlight>
                                <Group>
                                    <NumberTitle>Comics</NumberTitle>
                                    <NumberIcon src={comicsIcon} alt="Comics" />
                                    <Numbers>1212</Numbers>
                                </Group>
                                <Group>
                                    <NumberTitle>Series</NumberTitle>
                                    <NumberIcon src={seriesIcon} alt="Comics" />
                                    <Numbers>1212</Numbers>
                                </Group>
                                <Group>
                                    <NumberTitle>Histórias</NumberTitle>
                                    <NumberIcon
                                        src={storiesIcon}
                                        alt="Comics"
                                    />
                                    <Numbers>1212</Numbers>
                                </Group>
                            </Highlight>
                            <SeeDetails>Ver mais</SeeDetails>
                        </Card>
                    </Slider>
                </Cards>
            </BoxCreators>
        </Section>
    );
}
