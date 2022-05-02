import { ReactElement } from "react";

import Nav from "../components/Nav";
import Search from "../components/Search";

export default function HomePage(): ReactElement {
    return (
        <>
            <Nav />
            <Search />
        </>
    );
}
