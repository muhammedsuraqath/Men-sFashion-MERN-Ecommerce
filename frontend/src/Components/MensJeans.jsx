import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MensTopSection from "../CustomComponents/MensTopSection";
import Pagination from "../CustomComponents/Pagination";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressLoader from "../CustomComponents/Progress";
import { MensJeansData } from "../Fetch/Fetch";
import { GetMensJeansFailure, GetMensJeansRequest, GetMensJeansSuccess } from "../Redux/Action";
import Footer from "./Footer";
import { getCurrentPage } from "./WomensAllClothing";

export default function MensJeansPage ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,MensJeans} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            MensJeans : s.MensJeans
        }
    });

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleJeans = ( ) =>{
        Dispatch(GetMensJeansRequest( ))
        MensJeansData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensJeansSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensJeansFailure(err)))
    };

    useEffect(( ) =>{
        handleJeans( );
    },[page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
        <MensTopSection/>
        <Box mt='20px'> 
            <ProductsListing data={MensJeans} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page) => setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>
        <Footer/>
        </>
    )
}