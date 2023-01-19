import React, { useEffect, useState } from 'react';
import { Container } from './StyledComponents';
import Form from './Form';
import axios from '../axios';
import ShowToDo from './ShowToDo';

const ToDoList = () => {
    const [input, setInput] = useState();
    //console.log("input:", input);
    const [todos, setTodos] = useState([]);

    const fetchdata = async () => {
        try {
        const response = await axios.get("/todos");
        setTodos(response.data);
        }
        catch(error) {
        console.log(error);
        console.log(error.message);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);
    
    const addTodo = async (e) => {
        e.preventDefault();
        if (input.length === 0) return null;
        await axios.post("/todos", [
          {
            ...todos,
            text: input,
            completed: false,
          },
        ]);
        fetchdata();
        setInput("");
        console.log("AddedTodo")
      };

    //console.log("todos:", todos);
    
    return (
        <Container>
            <h1>ToDoList</h1>
            {/* Form component */}
            <Form input={input} setInput={setInput} addTodo={addTodo}/>
            {/* ToDoList */}
            <ShowToDo todos={todos} fetchData={fetchdata}/>
            {/* Key */}
            {/* Author component */}
        </Container>
    );
};

export default ToDoList;