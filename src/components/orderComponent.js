import React, { Component } from "react";

class OrderBy extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false
        }
        this.handleOrderList = this.handleOrderList.bind(this);
        this.handleOrderEvent = this.handleOrderEvent.bind(this);
    }



    handleOrderList(){
        this.setState({
            open: !this.state.open
        })
    }
    

    handleOrderEvent(event){
        this.props.orderCallback(event.target.value);
        event.preventDefault();
    }

    render(){
        return(
            <div class="filter col-2 col-s-6">
                <div>
                <button class="orderBy" onClick={this.handleOrderList}>Ordenar Por:<i class="material-icons" styles="font-size:18px">filter_list</i></button>
                </div>
                {this.state.open && (
                    <div>
                            <button value="fecha" onClick={this.handleOrderEvent} class="orderBy-internal">Mas recentes</button>
                            <button value="menorPrecio" onClick={this.handleOrderEvent} class="orderBy-internal">Menor preço</button>
                            <button value="mayorPrecio" onClick={this.handleOrderEvent} class="orderBy-internal">Maior preço</button>
                    </div>
                )}
            </div>

        )
    }
}

export default OrderBy