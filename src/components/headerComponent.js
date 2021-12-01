//Este componente se encarga de mostrar el Header en el webiste. Dentro de este header
//se esta mostrando el logo y el icono de la bolsa.
//Este componente recibe un props que es la cantidad de items que hay en el carrito de compras y lo muestra en una pequeña badge

import React, { Component } from "react";


class Header extends Component{
    constructor(props){
    super(props)

}

    render(){
        return (            
            <div class="header">
                <div class="headerContainer col-12 col-s-12">
                    <div class="logo col-6 col-s-6">
                        <img  src='assets/images/logo-m3.png' class="imgValues" alt="logo" max-width="119px" max-height="30px"/>
                    </div>
                    <div class="icon col-6 col-s-6">
                        <button type="button" class="icon-button">
                            <span class="material-icons icon">shopping_bag</span>
                            <span class="icon-button-badge">{this.props.basketAmount}</span>
                        </button>

                    </div>


                </div>
            </div>
        )
    }
}

export default Header;