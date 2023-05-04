import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Form = ({ setItems }) => {
   const [name, setName] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      if (name) {
         setName("");
         setItems((prevValue) => [
            ...prevValue,
            { name, completed: false, id: nanoid() },
         ]);
      } else {
         toast.error("Write!");
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <h4>to do list</h4>
         <div className="form-control">
            <input
               type="text"
               className="form-input"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" type="submit">
               Add to do
            </button>
         </div>
      </form>
   );
};
export default Form;
