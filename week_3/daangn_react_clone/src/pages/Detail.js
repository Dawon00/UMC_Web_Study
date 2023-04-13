import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";

import Navbar from "../components/navbar";

function Detail(props) {
    let { id } = useParams();
    const { state } = useLocation();

    console.log(
        id,
        state.name,
        state.price,
        state.image,
        state.address,
        state.like,
        state.chat
    );

    return (
        <div>
            <Navbar></Navbar>
            Detail {id} {state.name}
        </div>
    );
}

export default Detail;
