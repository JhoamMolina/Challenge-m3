import React from "react";
import OrderBy from "./orderComponent";

function RenderImage({picture}){
    
    return(
        <div>
        <img styles="position: relative"src={picture.image} alt={picture.name} width="192px" height=" 293px" />
            <div>
                <h2>{picture.name}</h2> 
                <h3>R$ {picture.price}</h3>
                <p>até {picture.parcelamento[0]} de R${picture.parcelamento[1]}</p>
                <button class="buttonBlack">COMPRAR</button>
            </div>
        </div>
    )
}


let result = [];

const Products = (props)  => {
    switch(props.step){
        case "menorPrecio":
            result = props.pictures.sort(function(a,b) {
                return a.price - b.price});
                break;
        case "mayorPrecio":
            result = props.pictures.sort(function(a,b) {
                return b.price - a.price});
                break;
        case "fecha":
            result = props.pictures.sort(function(a,b) {
                return (new Date(b.date) - new Date(a.date))})
                break;
        default:   
            result = props.pictures

    }
    const menu = result.map((picture) => {

        return (
            <div key={picture.id} class="card-product col-4">
                <RenderImage picture={picture}/>
            </div>      
        );

    });

    

    return (
        <div class="filter col-8">
            {menu}
        </div>

    )

}

export default Products