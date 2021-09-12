import axios from "axios";
const apiUrl = "https://dutodo-list-2-0.herokuapp.com/api/todos";

export function getTodos() {
    return axios.get(apiUrl);
}

export function addTodo(todo) {
    return axios.post(apiUrl, todo);
}

export function updateTodo(id, todo) {
    return axios.put(apiUrl + "/" + id, todo);
}

export function deleteTodo(id) {
    return axios.delete(apiUrl + "/" + id);
}