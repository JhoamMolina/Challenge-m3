import React, { Component } from "react";


class Header extends Component{

    render(){
        return (            
            <div class="header">
                <img src='assets/images/logo-m3.png' class="logo" alt="logo"/>
                <span class="material-icons icon">shopping_bag</span>

            </div>
        )
    }
}

export default Header;