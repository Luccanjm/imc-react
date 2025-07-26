import {useState} from "react"

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let alturaEmMetros = altura / 100
    let imc = peso / (alturaEmMetros * alturaEmMetros)
    let classificacao = "Não classificado"
    if(imc < 18.5){
        classificacao = "Abaixo do peso"
    } else if(imc < 24.9 && imc > 18.5){
        classificacao = "Peso Normal"
    }else if(imc < 29.9 && imc > 24.9){
       classificacao = "Sobrepeso"
    }else{
        classificacao = "Obesidade"
    }

    return(
        <form>
            <label htmlFor="">Altura</label>
            <input type="number" onChange={({target}) => setAltura(evento.target.value)}/>
            <label htmlFor="">Peso</label>
            <input type="number" onChange={({target}) => setPeso(evento.target.value)}/> 
            <h2>Peso: {peso}</h2>
            <h2>Altura: {altura}</h2>
            <h2>IMC: {imc}</h2>
            <h2>Classificação: {classificacao}</h2>
        </form>
    )
}

export default Form