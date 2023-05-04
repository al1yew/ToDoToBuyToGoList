import { useState } from "react";
import { ADDTODO } from "./actions";

const Form = ({ dispatch }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADDTODO, payload: { name } });
        setName("");
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
