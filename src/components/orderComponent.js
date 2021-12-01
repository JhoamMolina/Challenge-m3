import React, { Component } from "react";

class OrderBy extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false
        }
        this.handleOrderList = this.handleOrderList.bind(this);
        this.handleOrderEvent = this.handleOrderEvent.bind(this);
        this.handleOrderPhone = this.handleOrderPhone.bind(this);
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

    handleOrderPhone(event) {
        var elementId = event.target.id;
        if(elementId === "orderByButtonPhone"){
            document.getElementById("orderByButtonPhone").id = "clickedOrderBy";
            document.getElementById("phoneFilter").hidden = true;
            document.getElementById("orderFilter").style.width = "100%"
            this.setState({
                open: !this.state.open
            })

        }else{
            document.getElementById("phoneFilter").hidden = false;
            document.getElementById("clickedOrderBy").id = "orderByButtonPhone";
            document.getElementById("orderFilter").style.width = "50%"
            this.setState({
                open: !this.state.open
            })
        }
        event.preventDefault();
    }

    render(){
        return(
            <div id="orderFilter">

                <button id="orderByButtonPhone" onClick={this.handleOrderPhone}>Ordenar</button>
                <button class="orderByButton " onClick={this.handleOrderList}>Ordenar Por:<i class="material-icons" styles="font-size:18px">filter_list</i></button>

                {this.state.open && (
                    <div class="orderBy-content">
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