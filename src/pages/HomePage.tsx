import { ReactElement } from "react";

import CharactersCard from "../components/CharactersCard";
import ComicsCard from "../components/ComicsCard";
import CreatorsCard from "../components/CreatorsCard";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function HomePage(): ReactElement {
    return (
        <>
            <Nav />
            <Search />
            <ComicsCard />
            <CharactersCard />
            <CreatorsCard />
        </>
    );
}
