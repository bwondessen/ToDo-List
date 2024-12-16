// Retrieve todo from local storage or initialize an empty array
let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const deleteButton = document.getElementById("delete-btn");
const addButton = document.querySelector(".btn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    addButton.addEventListener("click", addTask);
});

function addTask() {

};