import React, { Component } from "react";


class Header extends Component{
    constructor(props){
    super(props)

}

    render(){
        return (            
            <div class="header">
                <div class="container">
                    <div class="col-8">
                        <img  src='assets/images/logo-m3.png' class="logo" alt="logo" width="119px" height="30px"/>
                    </div>
                    <div class="icon col-4">
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