import React from "react";
import { useState, useEffect } from "react";
import Convert from "./convert.js";

export default function Values() {
    const [firstVal, setFirstVal] = useState("Decimal");
    const [secVal, setSecVal] = useState("Binary");
    const [mode, setMode] = useState(1);

    const changeMode = () => {
        console.log("button clicked");
        if (mode === 1) {
            setMode(2);
            return;
        }
        setMode(1);
    };

    useEffect(() => {}, []);

    return (
        <div id="convert">
            {mode === 1 ? (
                <h2>
                    {firstVal} to {secVal}
                </h2>
            ) : (
                <h2>
                    {secVal} to {firstVal}
                </h2>
            )}
            <button onClick={changeMode}>change</button>
            <Convert mode={mode}/>
        </div>
    );
}
