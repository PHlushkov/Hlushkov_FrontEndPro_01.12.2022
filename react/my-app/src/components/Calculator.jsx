import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <div className="result">
        <input type="text" value={result} />
      </div>
      <div className="buttons">
        <button className="button" name="1" onClick={handleClick}>1</button>
        <button className="button" name="2" onClick={handleClick}>2</button>
        <button className="button" name="3" onClick={handleClick}>3</button>
        <button className="button" name="4" onClick={handleClick}>4</button>
        <button className="button" name="5" onClick={handleClick}>5</button>
        <button className="button" name="6" onClick={handleClick}>6</button>
        <button className="button" name="7" onClick={handleClick}>7</button>
        <button className="button" name="8" onClick={handleClick}>8</button>
        <button className="button" name="9" onClick={handleClick}>9</button>
        <button className="button" name="0" onClick={handleClick}>0</button>
        <button className="button" name="+" onClick={handleClick}>+</button>
        <button className="button" name="-" onClick={handleClick}>-</button>
        <button className="button" name="*" onClick={handleClick}>*</button>
        <button className="button" name="/" onClick={handleClick}>/</button>
        <button className="button" name="." onClick={handleClick}>.</button>
        <button className="button" onClick={clear}>Clear</button>
        <button className="button" onClick={backspace}>C</button>
        <button className="button" onClick={calculate}>=</button>
      </div>
    </div>
  );}

  export default Calculator;
