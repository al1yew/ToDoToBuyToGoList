import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addToDo }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            e.preventDefault();
            addToDo(name);
            setName("");
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
                    Add
                </button>
            </div>
        </form>
    );
};
export default Form;
