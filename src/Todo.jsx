import { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer"
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos=todos.length

  useEffect (()=> {
const storedTodos = localStorage.getItem("todos");
if(storedTodos){
  setTodos(JSON.parse(storedTodos))
}
  },[])

  useEffect (()=> {
     localStorage.getItem("todos", JSON.stringify(todos));

      },[todos])

  return (
    <>
    <div >
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </div>
    </>
  );
}
