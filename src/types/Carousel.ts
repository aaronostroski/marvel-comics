import { ReactElement } from "react";

export interface IComicsCarousel {
    infinite: boolean;
    speed: number;
    slidesToScroll: number;
    autoplay: boolean;
    centerMode: boolean;
    adaptiveHeight: boolean;
    slidesToShow: number;
    autoplaySpeed: number;
    nextArrow: ReactElement;
    prevArrow: ReactElement;
    responsive: any;
}
