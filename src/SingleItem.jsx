import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "react-toastify";

const SingleItem = ({ item, removeItem, submitUpdate }) => {
   const [isChecked, setIsChecked] = useState(item.completed);
   const [updatedValue, setUpdatedValue] = useState(null);
   const [update, setUpdate] = useState(false);

   const handleUpdate = (id) => {
      submitUpdate({ id, updatedValue });
      setUpdate(false);
      toast.success("Updated");
   };

   return update ? (
      <div className="form-area">
         <input
            type="text"
            className="form-area-input"
            value={updatedValue ?? item.name}
            onChange={(e) => setUpdatedValue(e.target.value)}
         />
         <button
            className="btn"
            type="button"
            onClick={() => handleUpdate(item.id)}
         >
            <MdOutlineDone className="submit" />
         </button>
      </div>
   ) : (
      <div className="single-item">
         <input
            type="checkbox"
            className="_checkbox"
            id={item.id}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
         />
         <label htmlFor={item.id}>
            {isChecked ? (
               <GiCrossMark className="underdone icon" />
            ) : (
               <IoMdDoneAll className="done icon" />
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
            onClick={() => setUpdate(!update)}
         >
            <GrUpdate className=" icon" />
         </button>
      </div>
   );
};
export default SingleItem;
