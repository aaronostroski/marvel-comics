import { ReactElement, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import mjonirIcon from "../../assets/mjonir.svg";
import { NextArrow, PrevArrow } from "../../shared/Arrows";
import { Container } from "../../shared/Container";
import ContentTitle from "../../shared/ContentTitle";
import { Section } from "../../shared/Section";
import { IComicsCarousel } from "../../types/Carousel";
import ContentTitleType from "../../types/ContentTitle";
import { Card, Cards } from "./style";

export default function ComicsCard(): ReactElement {
    const propsContentTitle: ContentTitleType = {
        alt: "Comics",
        src: mjonirIcon,
        title: "Encontre e descuba entre os milhares de quadrinhos da Marvel publicados!"
    };

    const settingsCarouselLinear: IComicsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        adaptiveHeight: false,
        slidesToShow: 6,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow onClick ableLateralArrows={true} />,
        prevArrow: <PrevArrow onClick ableLateralArrows={true} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
    const settingsCarouselReverse: IComicsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: -2,
        autoplay: true,
        centerMode: true,
        adaptiveHeight: false,
        slidesToShow: 6,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow onClick ableLateralArrows={true} />,
        prevArrow: <PrevArrow onClick ableLateralArrows={true} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2
                    // slidesToScroll: 2,
                    // initialSlide: 2,
                    // arrows: false
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
                    <Slider {...settingsCarouselLinear}>
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                    </Slider>
                    <Slider {...settingsCarouselReverse}>
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                        <Card
                            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/62685199a708d/portrait_uncanny.jpg"
                            alt="test"
                        />
                    </Slider>
                </Cards>
            </Container>
        </Section>
    );
}
