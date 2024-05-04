import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../lib/redux/todoSlice";

const Singletodo = ({ data }) => {
  const dispatch = useDispatch();
  const { title, id, desc, isDone } = data;
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const completeHandler = (id) => {
    dispatch(completedTodo(id));
  };
  return (
    <div className={` ${isDone?'bg-gray-900':""}  bg-black/60 flex flex-col  p-2 w-72 md:w-[50%] rounded-sm shadow-sm shadow-black`}>
      <h2 className={` ${isDone ? "line-through" : ""} font-semibold`}>
        {title}
      </h2>
      <p className={` ${isDone ? "line-through" : ""}  text-gray-300`}>
        {desc}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <button
          onClick={() => {
            deleteHandler(id);
          }}
          className="hover:bg-red-700 hover:text-white transition-all border text-red-800 border-red-800 p-1 px-3 rounded-sm"
        >
          {" "}
          <RiDeleteBin6Line size={18} />{" "}
        </button>
        <button
          onClick={() => {
            completeHandler(id);
          }}
          className={` ${isDone?'bg-yellow-700 text-white':"border border-yellow-700 text-yellow-700"}  hover:bg-yellow-700 hover:text-white  p-1 px-3 rounded-sm`}
        >
          {" "}
          <IoMdCheckmark size={18} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Singletodo;
