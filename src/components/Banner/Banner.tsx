import React from "react";

import "./Banner.css"

interface BannerProps{
    enderecoImagem: string,
    textoAlternativo?: string  
}

function Banner({ enderecoImagem, textoAlternativo} :BannerProps){
    return(
        <>
            <img className="banner-img" alt={textoAlternativo} src={enderecoImagem}/>
        </>
    )
}

//<img className="banner-img" alt="banner" src={"/img/banner.png"}/>
export default  Banner