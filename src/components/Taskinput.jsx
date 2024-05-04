import React from 'react'
import UsetaskInput from '../hooks/usetaskInput';
const Addtask = () => {
  const {setDesc,setTitle,desc,title,createHandler} = UsetaskInput();
  return (
    <form className="shadow-sm shadow-black w-72 md:w-[50%] flex-col flex gap-2 p-2 rounded-sm">
      <input
        className="p-1 outline-none border px-2 border-gray-500 rounded-sm bg-transparent"
        type="text"
        placeholder="Title here.."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="p-1 resize-none outline-none border px-2 border-gray-500 rounded-sm bg-transparent"
        rows="3"
        placeholder="Description here.."
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></textarea>
      <button
        onClick={createHandler}
        type="submit"
        className="px-6 p-2 rounded-sm bg-green-800 font-semibold uppercase hover:bg-green-700"
      >
        Create
      </button>
    </form>
  );
};

export default Addtask;
