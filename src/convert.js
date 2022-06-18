import React from "react";
import { useState, useEffect } from "react";
import module from "./functions.js";

export default function Convert(props) {
    console.log("im passing a prop", props.mode);
    let mode = props.mode;

    const [val, setVal] = useState(null);
    const [result, setResult] = useState(null);

    const onChange = (e) => {
        if (e.target.value) {
            console.log(e.target.value);
            setVal(e.target.value);
            return;
        }
        setVal(null);
        setResult(null);
    };

    const onClick = () => {
        if (val != null) {
            if (mode === 1) {
                setResult(module.decimalToBinary(val));
            } else if (mode === 2) {
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

            <h1>Result: {result}</h1>
        </div>
    );
}
