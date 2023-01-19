import React, { useState } from 'react';
import { Container } from './StyledComponents';
import Form from './Form';

const ToDoList = () => {
    const [input, setInput] = useState();
    console.log("input:", input);
    
    return (
        <Container>
            <h1>ToDoList</h1>
            {/* Form component */}
            <Form input={input} setInput={setInput}/>
            {/* ToDoList */}
            {/* Key */}
            {/* Author component */}
        </Container>
    );
};

export default ToDoList;