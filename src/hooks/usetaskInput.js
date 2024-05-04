import  { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../lib/redux/todoSlice";
import toast from "react-hot-toast";
const UsetaskInput = () => {
  const data = useSelector((state) => state?.todoReducer?.data);

  const dispatch = useDispatch();
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(data));
  },[data])
  const id = uuidv4();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // -------- create button----------
  const createHandler = (e) => {
    e.preventDefault();
    try {
      if (title.length <= 0 || desc.length <= 0) {
        return toast.error("Title and description is required field..");
      }
      const todo = { id, title, desc, isDone: false };
      dispatch(addTodo(todo));
    } catch (error) {
      console.log(error.message);
    } finally {
      setTitle("");
      setDesc("");
    }
  };
  return {setDesc,setTitle,title,desc,createHandler};
};

export default UsetaskInput;
