"use client"
import { useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const TodoApp = () => {
    let[todo , setTodo] = useState<string>("")
    let[editMode , setEditMode] = useState<Boolean>(false)
    let[todoList , setTodoList] = useState<string[]>([])
    let[todoEditValue, setTodoEditValue] = useState<{
        value: string,
        index : number | null
    }>({value:"" , index : null})
    const addTodo = () => {
        setTodoList([...todoList, todo]);
        setTodo("");
      };
      const deleteTodo = (index: number) => {
        setTodoList(todoList.filter((todo, i) => i != index));
      };
      const editTodo = (index: number) => {
        const newTodos = [...todoList];
        newTodos.splice(index, 1, todo);
        setTodoList(newTodos);
        setEditMode(false);
        setTodo("");
      return(
<div>
      <h1 className="underline text-center text-lg font-bold">
        TODO APPLICATIONS
      </h1>

      <div className="flex flex-wrap items-center justify-center space-x-2 my-5">
        <label htmlFor="todoname">
          <input
            value={todo}
            onChange={(e) => {
              todo = e.target.value;
              setTodo(todo); // updates ui plus assigns todo value
            }}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="todoname"
            placeholder="Enter your todo"
          />
        </label>
        <button
          type="button"
          className="rounded-md bg-purple-400 px-2 mt-3"
          onClick={() => {
            editMode ? editTodo(todoEditValue.index as number) : addTodo();
          }}
        >
          {editMode ? "Edit Todo" : "Add Todo"}
        </button>
      </div>

      <h1 className=" text-center text-xl font-bold">MY TODOS</h1>

      {/* TODO APP START */}
      <ul className="w-[10rem] sm:w-[20rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem]  m-auto flex flex-col items-center justify-center">
        {todoList.map((todo: string, i: number) => {
          return (
            <li
              key={i}
              className="w-full flex justify-between items-center border rounded-md p-2 my-2"
            >
              {todo}
              <div className="flex space-x-1">
                <FaTrash
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => {
                    deleteTodo(i);
                  }}
                />
                <FaEdit
                  onClick={() => {
                    setTodo(todo);
                    setEditMode(true);
                    setTodoEditValue({ value: todo, index: i });
                  }}
                  className="hover:text-red-400 cursor-pointer"
                />
              </div>
            </li>
          );
        })}
      </ul>
      {/* TODO App END */}
    </div>
  );
}
}

//export default TodoApp;



const TodoApp1 = () => {
  <>
    <h1> Hello World</h1>
  </>
}

export default TodoApp1
            
