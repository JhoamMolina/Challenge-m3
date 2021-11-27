import React, { Component } from "react";

class OrderBy extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInternalButtonClick = this.handleInternalButtonClick.bind(this);
    }



    handleButtonClick(){
        this.setState({
            open: !this.state.open
        })
    }
    

    handleInternalButtonClick(event){
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }

    render(){
        return(
            <div class="filter col-2">
                <div>
                <button class="orderBy" onClick={this.handleButtonClick}>Ordenar Por:<i class="material-icons" styles="font-size:18px">filter_list</i></button>
                </div>
                {this.state.open && (
                    <div>
                            <button value="fecha" onClick={this.handleInternalButtonClick} class="orderBy-internal">Mas recentes</button>
                            <button value="menorPrecio" onClick={this.handleInternalButtonClick} class="orderBy-internal">Menor preço</button>
                            <button value="mayorPrecio" onClick={this.handleInternalButtonClick} class="orderBy-internal">Maior preço</button>
                    </div>
                )}
            </div>

        )
    }
}

export default OrderBy