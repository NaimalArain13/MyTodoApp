"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const TodoApp = () => {
  let [todo, setTodo] = useState<string>("");
  let [editMode, setEditMode] = useState<Boolean>(false);
  let [isImportant, setisImportant] = useState<boolean>(false);
  let [todoList, setTodoList] = useState<
    { text: string; isImportant: boolean }[]
  >([]);
  let [todoEditValue, setTodoEditValue] = useState<{
    value: string;
    index: number | null;
    isImportant: boolean;
  }>({ value: "", index: null, isImportant: false });
  let [errorMessage, setErrorMessage] = useState<string>("");

  const addTodo = () => {
    if (todo.trim() === "") {
      setErrorMessage("Please enter a valid Todo");
      console.log(todo);
      return;
    }
    setTodoList([...todoList, { text: todo, isImportant }]);
    setTodo("");
    setisImportant(false);
    setErrorMessage("");
  };
  const deleteTodo = (index: number) => {
    setTodoList(todoList.filter((_, i) => i != index));
  };
  const editTodo = (index: number) => {
    if (todo.trim() === "") {
      setErrorMessage("Please enter a valid Todo");
      console.log(todo);
      return;
    }

    const newTodos = [...todoList];
    newTodos[index] = { text: todo, isImportant };
    setTodoList(newTodos);
    setEditMode(false);
    setTodo("");
    setisImportant(false);
    setErrorMessage("");
  };
  const getImportantTodos = () => {
    return todoList.filter((todo) => todo.isImportant);
  };
  return (
    <div>
      <h1 className="underline text-center text-lg font-bold text-red-800">
        TODO APPLICATION
      </h1>

      <div className="flex flex-wrap items-center justify-center space-x-2 my-5">
        <label htmlFor="todoname">
          <input
            value={todo}
            onChange={(e) => {
              todo = e.target.value;
              setTodo(todo);
            }}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            name="todoname"
            placeholder="Enter your todo"
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={isImportant}
            onChange={(e) => setisImportant(e.target.checked)}
          />
          <span className="rounded-md bg-yellow-300 px-2 mt-3">
            Important Todos
          </span>
        </label>
        <button
          type="button"
          className="rounded-md bg-cyan-400 px-2 mt-3"
          onClick={() => {
            editMode ? editTodo(todoEditValue.index as number) : addTodo();
          }}
        >
          {editMode ? "Edit Todo" : "Add Todo"}
        </button>
      </div>

      <p className="text-center text-red-600">{errorMessage}</p>
      <h1 className=" text-center text-xl font-bold">MY TODOS</h1>

      {/* TODO APP START */}
      <ul className="w-[10rem] sm:w-[20rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem]  m-auto flex flex-col items-center justify-center">
        {todoList.map((todo, i) => {
          return (
            <li
              key={i}
              className="w-full flex justify-between items-center border rounded-md p-2 my-2"
            >
              {todo.text}
              <div className="flex space-x-1">
                <FaTrash
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => {
                    deleteTodo(i);
                  }}
                />
                <FaEdit
                  onClick={() => {
                    setTodo(todo.text);
                    setEditMode(true);
                    setTodoEditValue({
                      value: todo.text,
                      index: i,
                      isImportant: todo.isImportant,
                    });
                  }}
                  className="hover:text-red-400 cursor-pointer"
                />
              </div>
            </li>
          );
        })}
      </ul>
      {/* TODO App END */}
      {/* IMPORTANT TODOS lIST START */}
      <h1 className=" text-center text-xl font-bold">IMPORTANT TODOS</h1>
      <ul className="w-[10rem] sm:w-[20rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem]  m-auto flex flex-col items-center justify-center">
        {getImportantTodos().map((todo, i) => {
          return (
            <li
              key={i}
              className="w-full flex justify-between items-center border rounded-md p-2 my-2"
            >
              {todo.text}
              <div className="flex space-x-1">
                <FaTrash
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => {
                    setTodo(todo.text);
                    setisImportant(todo.isImportant);
                    setEditMode(true);
                    setTodoEditValue({
                      value: todo.text,
                      index: i,
                      isImportant: todo.isImportant,
                    });
                    deleteTodo(i);
                  }}
                />
                <FaEdit
                  onClick={() => {
                    setTodo(todo.text);
                    setEditMode(true);
                    setTodoEditValue({
                      value: todo.text,
                      index: i,
                      isImportant: todo.isImportant,
                    });
                  }}
                  className="hover:text-red-400 cursor-pointer"
                />
              </div>
            </li>
          );
        })}
      </ul>
      {/* IMPORTANT TODOS lIST END */}
    </div>
  );
};

export default TodoApp;
