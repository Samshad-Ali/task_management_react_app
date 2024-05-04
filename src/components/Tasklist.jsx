import React from "react";
import Singletodo from "./Singletodo";
import { useSelector } from "react-redux";
import Badge from "./Badge";

const Tasklist = () => {
  const data = useSelector((state) => state?.todoReducer?.data);
  return (
    <div className="w-full flex gap-4 flex-col justify-center items-center">
      {data?.length > 0 ? (
        data?.map((item) => <Singletodo data={item} key={item.id} />)
      ) : (
        <Badge />
      )}
    </div>
  );
};

export default Tasklist;
