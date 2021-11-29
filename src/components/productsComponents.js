import React from "react";

function RenderImage({picture,addTobasket}){
    return(
        <div>
        <img styles="position: relative"src={picture.image} alt={picture.name} width="192px" height=" 293px" />
            <div>
                <h2>{picture.name}</h2> 
                <h3>R$ {picture.price}</h3>
                <p>até {picture.parcelamento[0]} de R${picture.parcelamento[1]}</p>
                <button onClick={() => addTobasket(picture)} class="buttonBlack col-12">COMPRAR</button>
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

    const filterByColor = (products, color) => {
        return products.filter(item => (item.color === color) || (color === ""))
    }

    const filterByPrice = (products, mayor, menor) => {
        return products.filter(item => ((mayor === 0) && (menor === 0)) || ((item.price > mayor) && (item.price < menor)))
    }

    const filterBySize = (products, tamano) => {
        return products.filter(item => ((tamano === "") || ((item.size[0] === tamano) || (item.size[1] === tamano))))
    }


    const menu = filterByColor(filterByPrice(filterBySize(result,props.size), props.mayor, props.menor), props.color).map((picture) => {
        return (
            <div key={picture.id} class="card-product col-4 col-s-6">
                <RenderImage picture={picture} addTobasket={props.addToBasket}/>
            </div>      
        );

    });    

    return (
        <div class="content-products col-8 col-s-12">
            {menu}
        </div>

    )
}

export default Products