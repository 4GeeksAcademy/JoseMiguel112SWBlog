import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useState, useEffect } from "react";
import {getWhatever} from "../services/swServices.js";

import { DetailCard } from "../components/DetailCard";


export const Detail = () => {

useEffect(() => {

        getWhatever
        
        }

    , [])

    return(
        <>
            <DetailCard item={props}/>
        </>
    )
}