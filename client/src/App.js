import React from "react";
import Todos from "./Todos";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";
import bac from "./assets/img/to-do-list.jpg";

class App extends Todos {
  state = { todos: [], currentTodo: "" };
  render() {
    const { todos } = this.state;
    return (
      <div
        className="App flex"
        style={{
          backgroundImage: `url(${bac})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Paper elevation={3} className="container">
          <div className="heading">TODO-LIST</div>
          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ margin: "15px 0" }}
          >
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "80%" }}
              value={this.state.currentTodo}
              required={true}
              onChange={this.handleChange}
              placeholder="Add New TO-DO"
            />
            <Button
              style={{ height: "40px",marginLeft:"10px" }}
              color="primary"
              variant="outlined"
              type="submit"
            >
              Add todo
            </Button>
          </form>
          <div>
            {todos.map((todo) => (
              <Paper key={todo._id} className="flex todo_container">
                <Checkbox
                  checked={todo.completed}
                  onClick={() => this.handleUpdate(todo._id)}
                  color="primary"
                />
                <div className={todo.completed ? "todo line_through" : "todo"}>
                  {todo.todo}
                </div>
                <Button
                  onClick={() => this.handleDelete(todo._id)}
                  color="secondary"
                >
                  delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
