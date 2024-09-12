import TodoBanner from "./TodoBanner";
import { useEffect, useState } from "react";
import TodoRow from "./ToDoList";
import TodoCreator from "./TodoCreator";
export default function TodoContainer() {
    let name = "Siddharth";
  
    const [todoItems, setTodoItems] = useState([]);
  
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('todoItems')) || [];
      setTodoItems(items);
    }, []);
  
    useEffect(() => {
      if (todoItems.length > 0) {
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
      }
    }, [todoItems]);
  
    const addNewTodoItem = (newItem) => {
      if (!todoItems.find((x) => x.action === newItem)) {
        setTodoItems([...todoItems, { id: Date.now(), action: newItem, done: false }]);
      }
    };
  
    const toggleTodo = (item) =>
      setTodoItems(
        todoItems.map((x) =>
          x.id === item.id ? { ...x, done: !x.done } : x
        )
      );
  
    const deleteTask = (id) => {
      setTodoItems(todoItems.filter((x) => x.id !== id));
    };
  
    const generateTodoRow = todoItems.map((x) => (
      <TodoRow key={x.id} item={x} callback={toggleTodo} deleteTask={deleteTask} />
    ));
  
    return (
      <>
        <TodoBanner name={name} tasks={todoItems} />
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Task</th>
              <th>Check</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {generateTodoRow}
          </tbody>
        </table>
        <TodoCreator callback={addNewTodoItem} />
      </>
    );
  }