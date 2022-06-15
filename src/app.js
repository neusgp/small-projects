import React from "react";
import { useState, useEffect, useRef } from "react";

export default function App() {
    const [name, setName] = useState("Neus");

    return <div>Hello {name}</div>;
}
