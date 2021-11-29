import React, { Component } from "react";

class Filter extends Component {

    constructor(props){
        super(props)

        this.handleColorCheckbox = this.handleColorCheckbox.bind(this)
        this.handleRangesCheckbox = this.handleRangesCheckbox.bind(this)
        this.handleSizeCheckbox = this.handleSizeCheckbox.bind(this)
    }


    handleColorCheckbox = (event) => {  // Funcion que se encarga de manejar el evento cuando un checkbox de color es seleccionada y envia la informacion
        // al component padre  
        var cbs = document.getElementsByClassName("cb");

        
        if(event.target.checked) {
            this.props.colorFilterCallback(event.target.value);
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;    
            }event.target.checked = true;
        }else if (event.target.checked === false){
            this.props.colorFilterCallback("");
            event.target.checked = false
        }
    }

    handleRangesCheckboxHelper(obj,menor,mayor){  // Funcion auxiliar que se encarga de deseleccionar las otras checkbox
        // y de enviar la informacion al componente padre de la checkbox que fue seleccionada
        var cbs = document.getElementsByClassName("pcb");
        if(obj.target.checked) {
            this.props.priceHandleCallback([menor,mayor]);
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;    
            }obj.target.checked = true;
        }else if (obj.target.checked === false){
            this.props.priceHandleCallback([0,0]);
            obj.target.checked = false
        }
    }
    
    handleRangesCheckbox  = (event) => { // Funcion que decide cual checkbox ha sido seleccionada y llama funciona handleRangeshelper para enviar la info
        console.log(event.target.value)
        switch(event.target.value){
            case "0":
                this.handleRangesCheckboxHelper(event,0,50)
                break;
            case "150":
                this.handleRangesCheckboxHelper(event,50,150)
                break;
            case "300":
                this.handleRangesCheckboxHelper(event,151,300)
                break;
            case "500":
                this.handleRangesCheckboxHelper(event,300,500)
                break;
            case "501":
                this.handleRangesCheckboxHelper(event,500,50000)
                break;
            default:

        }
    }

    handleSizeCheckbox = (event) => {
        var cbs = document.getElementsByClassName("scb");
        if(event.target.checked) {
            this.props.sizeHandleCallback(event.target.value);
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;    
            }event.target.checked = true;
        }else if (event.target.checked === false){
            event.target.checked = false
            this.props.sizeHandleCallback("");
        }
    }

    

    


    render(){        
        return (
            <div class="filter col-2 col-s-6">
                <div class="colorFilter col-12">
                <h1>Cores</h1>
                    <form>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="amarelo" name="amarelo" value="Amarelo" /> 
                        <label for="amarelo" > Amarelo</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="azul" name="azul" value="Azul" /> 
                        <label for="azul"> Azul</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="blanco" name="blanco" value="Blanco" /> 
                        <label for="blanco"> Blanco</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="cinza" name="cinza" value="Cinza" /> 
                        <label for="cinza"> Cinza</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="laranja" name="laranja" value="Laranja" /> 
                        <label for="laranja"> Laranja</label><br/>          
                    </form>
                </div>
                <div class="sizeFilter col-12">
                <h1>Tamanhos</h1>
                <form>
                    <ul>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="p" name="p" value="P"/>
                        <label for="p" > P </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="m" name="m" value="M"/> 
                        <label for="m" > M </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="g" name="g" value="G"/> 
                        <label for="g" > G </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="gg" name="gg" value="GG"/> 
                        <label for="gg" > GG </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="u" name="u" value="U"/> 
                        <label for="u" > U </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="36" name="36" value="36"/> 
                        <label for="36" > 36 </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="38" name="38" value="38"/> 
                        <label for="38" > 38 </label><br/>
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="40" name="40" value="40"/>
                        <label for="40" > 40 </label><br/> 
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="42" name="42" value="42"/>
                        <label for="42" > 42 </label><br/> 
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="44" name="44" value="44"/>
                        <label for="44" > 44 </label><br/> 
                        </li>
                        <li>
                        <input class="scb" onChange={this.handleSizeCheckbox} type="checkbox" id="46" name="46" value="46"/> 
                        <label for="46" > 46 </label><br/>
                        </li>
                    </ul>
                </form>                     
                </div>
                <div class="amountFilter col-12 ">
                <h1>Faixa de Preço</h1>
                    <form>
                        <input class="pcb" onChange={this.handleRangesCheckbox} type="checkbox" id="0-50" name="0-50" value="0" /> 
                        <label for="0-50" class="label success"> de R$0 até R$50</label><br/>
                        <input class="pcb" onChange={this.handleRangesCheckbox}  type="checkbox" id="51-150" name="51-150" value="150" /> 
                        <label for="51-150"> de R$51 até R$150</label><br/>
                        <input class="pcb" onChange={this.handleRangesCheckbox}  type="checkbox" id="151-300" name="151-300" value="300" /> 
                        <label for="151-300"> de R$151 até R$300</label><br/>
                        <input class="pcb" onChange={this.handleRangesCheckbox}  type="checkbox" id="301-500" name="301-500" value="500" /> 
                        <label for="301-500"> de R$301 até R$500</label><br/>
                        <input class="pcb" onChange={this.handleRangesCheckbox}  type="checkbox" id="500+" name="500+" value="501" /> 
                        <label for="500+"> a partir de R$ 500</label><br/>          
                    </form>
                </div>
            </div>
        )   
    }
}




export default Filter;