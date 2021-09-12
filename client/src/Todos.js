import { Component } from "react";
import {addTodo,getTodos,updateTodo,deleteTodo} from "./resource/todoResource";

class Todos extends Component {
    state = { todos: [], currentTodo: "" };

    async componentDidMount() {
        try {
            const { data } = await getTodos();
            this.setState({ todos: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTodo: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTodos = this.state.todos;
        try {
            const { data } = await addTodo({ todo: this.state.currentTodo });
            const todos = originalTodos;
            todos.push(data);
            this.setState({ todos, currentTodo: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async (currentTodo) => {
        const originalTodos = this.state.todos;
        try {
            const todos = [...originalTodos];
            const index = todos.findIndex((todo) => todo._id === currentTodo);
            todos[index] = { ...todos[index] };
            todos[index].completed = !todos[index].completed;
            this.setState({ todos });
            await updateTodo(currentTodo, {
                completed: todos[index].completed,
            });
        } catch (error) {
            this.setState({ todos: originalTodos });
            console.log(error);
        }
    };

    handleDelete = async (currentTodo) => {
        const originalTodos = this.state.todos;
        try {
            const todos = originalTodos.filter(
                (todo) => todo._id !== currentTodo
            );
            this.setState({ todos });
            await deleteTodo(currentTodo);
        } catch (error) {
            this.setState({ todos: originalTodos });
            console.log(error);
        }
    };
}

export default Todos;
