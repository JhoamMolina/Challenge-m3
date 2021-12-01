import React, { Component } from "react";

class Filter extends Component {

    constructor(props){
        super(props)
        this.state = {
            open: false,
            colorOpen: false,
            sizeOpen: false,
            amountOpen: false
        }

        this.handleColorCheckbox = this.handleColorCheckbox.bind(this)
        this.handleRangesCheckbox = this.handleRangesCheckbox.bind(this)
        this.handleSizeCheckbox = this.handleSizeCheckbox.bind(this)
        this.showMoreColors = this.showMoreColors.bind(this)
        this.phoneFilter = this.phoneFilter.bind(this)
        this.arrowHandler = this.arrowHandler.bind(this)
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

    showMoreColors = () => {
        console.log("Hola mundo")
        document.getElementById("hiddenColors").style.display = "inline-block"
        document.getElementById("displayText").style.display ="none"
    }
    
    phoneFilter(event){
        var elementId = event.target.id;
        if(elementId === "phoneFilterButton"){
            document.getElementById("phoneFilterButton").id = "clickedOrderBy";
            document.getElementById("orderFilter").hidden = true;
            document.getElementById("filter").hidden = false;
            this.setState({
                open: !this.state.open,
                colorOpen: true,
                sizeOpen: true,
                amountOpen: true
            })

        }else{
            document.getElementById("orderFilter").hidden = false;
            document.getElementById("clickedOrderBy").id = "phoneFilterButton";
            document.getElementById("filter").hidden = true;
            this.setState({
                open: !this.state.open
            })
        }

        event.preventDefault();
    }

    arrowHandlerHelper = (atr, name) => {
        console.log(atr,name)
        if((atr === true) && (name === 'color')){
            this.setState({
                colorOpen: false,
                sizeOpen: true,
                amountOpen: true
            })
        }else if((atr === false) && (name === 'color')){
            this.setState({
                colorOpen: true,
                sizeOpen: true,
                amountOpen: true
            })
        }else if((atr === true) && (name === 'size')){
                this.setState({
                    colorOpen: true,
                    sizeOpen: false,
                    amountOpen: true
                })
        }else if((atr === false) && (name === 'size')){
                this.setState({
                    colorOpen: true,
                    sizeOpen: true,
                    amountOpen: true
                }) 
        }else if((atr === true) && (name === 'amount')){
                    this.setState({
                        colorOpen: true,
                        sizeOpen: true,
                        amountOpen: false
                    })
        }else if((atr === false) && (name === 'amount')){
                    this.setState({
                        colorOpen: true,
                        sizeOpen: true,
                        amountOpen: true
                    })}  
    }

    arrowHandler(event){
        var localName = event.target.attributes.value.value;
        switch(localName){
 
        case "color":
            this.arrowHandlerHelper(this.state.colorOpen, localName)             
            break;
        case "size":
            this.arrowHandlerHelper(this.state.sizeOpen, localName)
            break;
        case "amount":
            this.arrowHandlerHelper(this.state.amountOpen, localName)
            break;
        default:
            return "hola";
        }
    }
    

    


    render(){        
        return (
            <>
            <div id="phoneFilter">
                <button onClick={this.phoneFilter} id="phoneFilterButton">Filtrar</button>
            </div>
            <div id="filter" hidden>
                <div id="colorFilter col-s-12">
                <h1>Cores</h1>
                <span onClick={this.arrowHandler} class="material-icons arrow" value="color">keyboard_arrow_down</span>
                <div hidden={this.state.colorOpen}>
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
                        <p id="displayText"onClick={this.showMoreColors}>Ver todas as cores</p>
                        <div id="hiddenColors">
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="verde" name="verde" value="Verde" /> 
                        <label for="verde" > Verde</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="vermelho" name="vermelho" value="Vermelho" /> 
                        <label for="vermelho" > Vermelho</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="preto" name="preto" value="Preto" /> 
                        <label for="preto" > Preto</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="rosa" name="rosa" value="Rosa" /> 
                        <label for="rosa" > Rosa</label><br/>
                        <input class="cb" onChange={this.handleColorCheckbox} type="checkbox" id="vinho" name="vinho" value="Vinho" /> 
                        <label for="vinho" > Vinho</label><br/>
                        </div>          
                    </form>
                </div>
                </div>
                <div class="sizeFilter col-12 col-s-12">
                <h1>Tamanhos</h1>
                <span onClick={this.arrowHandler} class="material-icons arrow" value="size">keyboard_arrow_down</span>                
                <div hidden={this.state.sizeOpen}>
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
                </div>
                <div class="amountFilter col-12 col-s-12">
                <h1>Faixa de Preço</h1>
                <span onClick={this.arrowHandler} class="material-icons arrow" value="amount">keyboard_arrow_down</span>                
                <div hidden={this.state.amountOpen}>
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
            </div>
        </>
        )   
    }
}




export default Filter;