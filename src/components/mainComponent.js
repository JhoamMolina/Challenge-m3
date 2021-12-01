//Este es el componente principal de la aplicación donde se estan comunicando todos los componentes
//Se encarga de recibir los estados de los child componenets y pasar a estos props, también aqui usamos nuestro reducer

import React from "react";
import { Component } from "react";
import Filter from './filterComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import OrderBy from "./orderComponent";
import Products from './productsComponents';
import { connect } from 'react-redux';
import { getMorePictures, addToBasket, fetchPictures } from "../redux/ActionCreators";



const mapStateToProps = state => {

    return {
        pictures: state.pictures,
        basket: state.basket

    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPictures: () => {dispatch(fetchPictures())},
    addToBasket: (picture) => {dispatch(addToBasket(picture))},
    getMorePictures: () => {dispatch(getMorePictures())}
})


    
class Main extends Component{

    constructor(props) {
        super(props);
            this.state = {
            orden: "",
            color: "",
            size: "",
            mayorQue: 0,
            menorQue: 0,
        }
    }


    componentDidMount(){
        this.props.fetchPictures();
    }

    colorFilterCallback = (filterData) => {
        this.setState({
            color: filterData
        })
    }

    orderByHandleCallback = (childData) => {
        this.setState({
            orden: childData
        })

    }

    priceHandleCallback = (childData) => {
        this.setState({
            mayorQue: childData[0],
            menorQue: childData[1]
        })
    }

    sizeHandleCallback = (childaData) => {
        this.setState({
            size: childaData
        })
    }



    render(){
        console.log()
        return (
            <div class="outside-container"> 
            <Header  basketAmount = {this.props.basket.basket.length}  />
            <div class="content-wrap">
                <div class="innerContainer col-12 col-s-12">
                <div class="blusas col-12 col-s-12">
                    <h1>Blusas</h1>
                </div>
                    <Filter sizeHandleCallback = {this.sizeHandleCallback} colorFilterCallback = {this.colorFilterCallback} priceHandleCallback = {this.priceHandleCallback} />
                    <OrderBy orderCallback = {this.orderByHandleCallback.bind(this)}/>
                    <Products getMorePictures = {this.props.getMorePictures} addToBasket = {this.props.addToBasket} pictures={this.props.pictures.pictures} step={this.state.orden} color={this.state.color} mayor={this.state.mayorQue} menor={this.state.menorQue} size={this.state.size}/>



                </div>                
            </div>
            <Footer />
          </div>
        )
    }
}


export default (connect(mapStateToProps, mapDispatchToProps)(Main));