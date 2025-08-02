import {useEffect, useState} from "react"

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [imc, setImc] = useState(0);
    let [alturaEmMetros, setAlturaEmMetros] = useState(0);
    let [classificacao, setClassificacao] = useState('');

    useEffect(() => {
    setAlturaEmMetros(altura/100);
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado);

    if(typeof peso === 'number' && typeof alturaEmMetros === 'number'){

        if(imcCalculado <= 0){
            setClassificacao('Não classificado');
        } else if(imcCalculado <= 18.5){
            setClassificacao('Abaixo do peso');
        } else if(imcCalculado <= 24.9 && imcCalculado > 18.5){
            setClassificacao('Peso Normal');
        }else if(imcCalculado <= 29.9 && imcCalculado > 24.9){
            setClassificacao('Sobrepeso');
        }else{
            setClassificacao('Obesidade');
        }

    } else{
        setImc(0);
    }
   
}, [peso,altura])

    return(
        <form>
            <label htmlFor="">Altura</label>
            <input type="number" onChange={({target}) => setAltura(Number(target.value))}/>
            <label htmlFor="">Peso</label>
            <input type="number" onChange={({target}) => setPeso(Number(target.value))}/> 
            <h2>Peso: {peso}</h2>
            <h2>Altura: {altura}</h2>
            <h2>IMC: {imc.toFixed(2)}</h2>
            <h2>Classificação: {classificacao}</h2>
        </form>
    )
}

export default Form