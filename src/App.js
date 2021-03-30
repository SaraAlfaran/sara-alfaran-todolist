import React, { useState, useEffect } from 'react';
import './App.css';
import "./bootstrap.css";

import AddElementForm from "./components/addElementForm"
import Element from "./components/Element"
import Task from "./Task"

function App() {
    const [elements, setElements] = useState([])

    // DATA PERSISTENCE IN LOCAL STORAGE: //  
    useEffect(() => {
        const data = localStorage.getItem("todo-list");
        if (data) {
            setElements(JSON.parse(data))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todo-list", JSON.stringify(elements))
    });
    // DATA PERSISTENCE IN LOCAL STORAGE: //

    return ( <
        >
        <
        div className = "App container" >

        <
        AddElementForm elements = { elements }
        setElements = { setElements }
        Task = { Task }
        />

        {
            elements.map((element, i) => ( <
                Element key = { i }
                element = { element }
                elements = { elements }
                setElements = { setElements }
                index = { i }
                />
            ))
        }

        <
        /div>

        <
        />
    );
}

export default App;