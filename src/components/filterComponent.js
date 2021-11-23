import React, { Component } from "react";

class Filter extends Component {

    render(){
        return (
            <div>
            <Welcome />
            </div>
        )   
    }


}

function Welcome(props) {
    return (
    <div class="orderBy">
        <p>Cores</p>
    </div>)
}

export default Filter;