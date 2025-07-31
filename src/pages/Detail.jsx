import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useState, useEffect } from "react";

import { DetailCard } from "../components/DetailCard";


export const Detail = props => {



    return(
        <>
            <DetailCard item={props}/>
        </>
    )
}