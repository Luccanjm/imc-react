import {useEffect, useState} from "react"

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [imc, setImc] = useState(0);
    let [alturaEmMetros, setAlturaEmMetros] = useState(0);
    let [classificacao, setClassificacao] = useState('');

useEffect(() => {
    setPeso(Number(peso));
    setAltura(Number(altura));
    setAlturaEmMetros(altura/100);
    if(typeof peso === 'number' && typeof alturaEmMetros === 'number'){
        setImc(peso / (alturaEmMetros * alturaEmMetros))

        if(imc <= 0){
            setClassificacao('Não classificado');
        } else if(imc <= 18.5){
            setClassificacao('Abaixo do peso');
        } else if(imc <= 24.9 && imc > 18.5){
            setClassificacao('Peso Normal');
        }else if(imc <= 29.9 && imc > 24.9){
            setClassificacao('Sobrepeso');
        }else{
            setClassificacao('Obesidade');
        }
    } else{
        setImc(null);
    }
   
}, [peso,altura])

    return(
        <form>
            <label htmlFor="">Altura</label>
            <input type="number" onChange={({target}) => setAltura(target.value)}/>
            <label htmlFor="">Peso</label>
            <input type="number" onChange={({target}) => setPeso(target.value)}/> 
            <h2>Peso: {peso}</h2>
            <h2>Altura: {altura}</h2>
            <h2>IMC: {imc}</h2>
            <h2>Classificação: {classificacao}</h2>
        </form>
    )
}

export default Form