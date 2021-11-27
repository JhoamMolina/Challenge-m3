import React, { Component } from "react";


class Header extends Component{

    render(){
        return (            
            <div class="header">
                <div class="container">
                    <div class="col-8">
                        <img  src='assets/images/logo-m3.png' class="logo" alt="logo" width="119px" height="30px"/>
                    </div>
                    <div class="icon col-4">
                    <span class="material-icons icon">shopping_bag</span>
                    </div>


                </div>
            </div>
        )
    }
}

export default Header;