import React from "react";
import { Component } from "react";
import Filter from './filterComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import OrderBy from "./orderComponent";
import Products from './productsComponents';
import { connect } from 'react-redux';
import { addToBasket, fetchPictures } from "../redux/ActionCreators";



const mapStateToProps = state => {

    return {
        pictures: state.pictures,
        basket: state.basket

    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPictures: () => {dispatch(fetchPictures())},
    addToBasket: (picture) => {dispatch(addToBasket(picture))}
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
                <div class="innerContainer">
                <div class="row blusas col-12 col-s-12">
                    <h1>Blusas</h1>
                </div>
                    <Filter sizeHandleCallback = {this.sizeHandleCallback} colorFilterCallback = {this.colorFilterCallback} priceHandleCallback = {this.priceHandleCallback} />
                    <Products addToBasket = {this.props.addToBasket} pictures={this.props.pictures.pictures} step={this.state.orden} color={this.state.color} mayor={this.state.mayorQue} menor={this.state.menorQue} size={this.state.size}/> 
                    <OrderBy orderCallback = {this.orderByHandleCallback.bind(this)}/>

                </div>                
            </div>
            <Footer />
          </div>
        )
    }
}


export default (connect(mapStateToProps, mapDispatchToProps)(Main));