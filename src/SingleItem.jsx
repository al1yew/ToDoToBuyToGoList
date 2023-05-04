import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";

const SingleItem = ({ item, removeItem }) => {
   const [isChecked, setIsChecked] = useState(item.completed);

   return (
      <div className="single-item">
         <input
            type="checkbox"
            id="_checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
         />
         <label htmlFor="_checkbox">
            {isChecked ? (
               <IoMdDoneAll className="done icon" />
            ) : (
               <GiCrossMark className="underdone icon" />
            )}
         </label>
         <p
            style={{
               textDecoration: isChecked && "line-through",
               color: isChecked ? "red" : "green",
            }}
         >
            {item.name}
         </p>
         <button
            className="btn remove-btn"
            type="button"
            onClick={() => removeItem(item.id)}
         >
            <AiFillDelete className=" icon" />
         </button>
         <button
            className="btn update-btn"
            type="button"
            onClick={() => updateItem(item.id)}
         >
            <GrUpdate className=" icon" />
         </button>
      </div>
   );
};
export default SingleItem;
