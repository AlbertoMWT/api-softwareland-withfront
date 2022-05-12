import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";

import "./App.css";

const App = () => {
    // State
    const [todos, setTodos] = useState([]);

    const addTodo = async (todo) => {
        await axios.post(`http://localhost:3001/tasks`, {
            content: todo.name,
        }); // req.body.content
        console.log(todo)

        setTodos((prevState) => [...prevState, todo]);
    };

    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:3001/tasks");

        const resTodos = res.data;
        console.log(resTodos)
        setTodos(resTodos);
    };

    const editTodo = async (id, newContent) => {
        await axios.patch(`http://localhost:3001/tasks/${id}`, {
            content: newContent,
        });

        setTodos((prevState) => {
            const currentTodos = prevState;

            const todoIndex = currentTodos.findIndex(
                (todo) => +todo.id === +id
            );

            const updatedTodo = currentTodos[todoIndex];

            updatedTodo.name = newContent;

            currentTodos[todoIndex] = updatedTodo;

            return [...currentTodos];
        });
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:3001/api/v1/tasks/${id}`);

        setTodos((prevState) => {
            const currentTodos = prevState;

            const updatedTodos = currentTodos.filter(
                (todo) => +todo.id !== +id
            );

            return [...updatedTodos];
        });
    };

    // When component is mounted, fetch todos
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="app">
            <Form onAddTodo={addTodo} />
            {/* <TodoList
                onDeleteTodo={deleteTodo}
                onEditTodo={editTodo}
                items={todos}
            /> */}
        </div>
    );
};

export default App;
