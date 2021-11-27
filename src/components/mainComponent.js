import React from "react";
import { Component } from "react";
import Filter from './filterComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import OrderBy from "./orderComponent";
import Products from './productsComponents';
import { connect } from 'react-redux';
import { fetchPictures } from "../redux/ActionCreators";



const mapStateToProps = state => {

    return {
        pictures: state.pictures
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPictures: () => {dispatch(fetchPictures())}
})


    
class Main extends Component{

    constructor(props) {
        super(props);
            this.state = {
            orden: ""
        }
    }


    componentDidMount(){
        this.props.fetchPictures();
    }

    handleCallback = (childData) =>{
        this.setState({orden: childData})

    }

    render(){
        return (
            <div> 
            <Header />
            <div>
                <div class="innerContainer">
                <div class="row blusas col-12">
                    <h1>Blusas</h1>
                </div>

                    <Filter />
                    <Products pictures={this.props.pictures.pictures} step={this.state.orden} /> 
                    <OrderBy parentCallback = {this.handleCallback}/>

                </div>
                
            </div>

            <Footer />
          </div>
        )
    }
}


export default (connect(mapStateToProps, mapDispatchToProps)(Main));