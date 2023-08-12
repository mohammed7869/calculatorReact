import '../App.css'
import React, {useState} from "react";
const Calculator = ()=>{
    const[num1, setNum1] = useState("")
    const[num2, setNum2] = useState("")
    const[result, setResult] = useState(0)
    const[operation, setOperation] = useState("")
    const[error, setError] = useState("")

    function inputFirst(event){
        setNum1(event.target.value);
    }
    function inputSecond(event){
        setNum2(event.target.value);
    }

    function validateInput(){
        
        if(num1 === ""){
            setError("Num1 cannot be empty")
            return false
        }
        if(num2 === ""){
            setError("Num2 cannot be empty")
            return false
        }
        if(isNaN(num1) || isNaN(num2)){
            setError("Please enter valid numbers")
            return false
        }
        setError("")
        return true
    }


    function calculateSum(){
        if(validateInput()){
            setResult(Number(num1)+Number(num2))
            setOperation("+")
        }
    }
    function calculateDiff(){
        if(validateInput()){
            setResult(Number(num1)-Number(num2))
            setOperation("-")
        }
    }
    function calculateMulti(){
        if(validateInput()){
            setResult(Number(num1)*Number(num2))
            setOperation("*")
        }
    }
    function calculateDiv(){
        if(validateInput()){
            setResult(Number(num1)/Number(num2))
            setOperation("/")
        }
    }
    return (
        <div className='container'>
        <h1>React Calculator</h1>
        <div className="form-group">
            <input type="text" placeholder="Num 1" onChange={inputFirst}></input>
            <input type="text" placeholder="Num 2" onChange={inputSecond}></input>
        </div>
        <div className="btn-group">
            <button onClick={calculateSum}>+</button>
            <button onClick={calculateDiff}>-</button>
            <button onClick={calculateMulti}>*</button>
            <button onClick={calculateDiv}>/</button>
        </div>
        <div className='res'>
             {error && <h3 className="error">Error!</h3>}
             {error === "Num1 cannot be empty" && <h4 className="error-message">Num1 Cannot Be Empty</h4>}
             {error === "Num2 cannot be empty" && <h4 className="error-message">Num2 Cannot Be Empty</h4>}
             {error === "Please enter valid numbers" && <h4 className="error-message">Please enter valid numbers</h4>}
             {!error && operation && <h3 className="success">Success!</h3>}
            {!error && operation === "+" && <h4>Result: {result}</h4>}
            {!error && operation === "-" && <h4>Result: {result}</h4>}
            {!error && operation === "*" && <h4>Result: {result}</h4>}
            {!error && operation === "/" && <h4>Result: {result}</h4>}
        </div>
        </div>
    
    );
}

export default Calculator;