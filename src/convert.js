import React from "react";
import { useState, useEffect } from "react";
import module from "./functions.js";
import detectError from "./binarydetection.js";

export default function Convert(props) {
    let mode = props.mode;

    const [val, setVal] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);

    const onChange = (e) => {
        if (e.target.value) {
            if (mode === 1) {
                setError(false);
                setVal(e.target.value);
                return;
            } else {
                setVal(e.target.value);
                setError(detectError(e.target.value));
                return;
            }
        }
        setVal(null);
        setResult(null);
        setError(false);
    };

    const onClick = () => {
        if (val != null) {
            if (mode === 1) {
                setResult(module.decimalToBinary(val));
            }

            if (mode === 2 && error == false) {
                setResult(module.binaryToDecimal(val));
            }
        }
    };

    /*  useEffect(() => {}, []); */

    return (
        <div id="convert">
            <input
                onChange={onChange}
                placeholder={"Enter value"}
                type="number"
            ></input>
            <button onClick={onClick}>GO!</button>
            {error && <p>Please, make sure you are entering a binary value.</p>}

            <h1>Result: {result}</h1>
        </div>
    );
}
