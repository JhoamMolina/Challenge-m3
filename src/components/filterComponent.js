import React, { Component } from "react";

class Filter extends Component {

    render(){
        return (

            <div class="filter col-2">
                    <ColorFilter />
                    <SizeFilter /> 
                    <AmountFilter /> 
            </div>
        )   
    }


}

function ColorFilter(props) {
    return (
    <div class="colorFilter col-12">
        <h1>Cores</h1>
        <form>
            <input type="checkbox" id="amarelo" name="amarelo" value="amarelo" /> 
            <label for="amarelo" class="label success"> Amarelo</label><br/>
            <input type="checkbox" id="azul" name="azul" value="azul" /> 
            <label for="azul"> Azul</label><br/>
            <input type="checkbox" id="blanco" name="blanco" value="blanco" /> 
            <label for="blanco"> Blanco</label><br/>
            <input type="checkbox" id="cinza" name="cinza" value="cinza" /> 
            <label for="cinza"> Cinza</label><br/>
            <input type="checkbox" id="laranja" name="laranja" value="laranja" /> 
            <label for="laranja"> Laranja</label><br/>          
        </form>
    </div>)
}

function SizeFilter(props) {
    return (
        <div class="sizeFilter col-12">
            <h1>Tamanhos</h1>
            <form>
                <input type="button" id="amarelo" name="amarelo" value="P"/> 
                <input type="button" id="amarelo" name="amarelo" value="M"/> 
                <input type="button" id="amarelo" name="amarelo" value="G"/> 
                <input type="button" id="amarelo" name="amarelo" value="GG"/> 
                <input type="button" id="amarelo" name="amarelo" value="U"/> 
                <input type="button" id="amarelo" name="amarelo" value="36"/> 
                <input type="button" id="amarelo" name="amarelo" value="38"/> 
                <input type="button" id="amarelo" name="amarelo" value="40"/> 
                <input type="button" id="amarelo" name="amarelo" value="36"/> 
                <input type="button" id="amarelo" name="amarelo" value="38"/> 
                <input type="button" id="amarelo" name="amarelo" value="40"/> 
            </form>
        </div>
    )
}


function AmountFilter(props) {
    return (
        <div class="amountFilter col-12">
            <h1>Faixa de Preço</h1>
                <form>
                <input type="checkbox" id="50" name="50" value="50" /> 
                <label for="50" class="label success"> de R$0 até R$50</label><br/>
                <input type="checkbox" id="51" name="51" value="51" /> 
                <label for="51"> de R$51 até R$150</label><br/>
                <input type="checkbox" id="151" name="151" value="151" /> 
                <label for="151"> de R$151 até R$300</label><br/>
                <input type="checkbox" id="301" name="301" value="301" /> 
                <label for="301"> de R$301 até R$500</label><br/>
                <input type="checkbox" id="500" name="500" value="500" /> 
                <label for="500"> a partir de R$ 500</label><br/>          
            </form>
        </div>
    )
}


export default Filter;