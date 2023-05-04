import { useState } from "react";
import { ADDITEM } from "./actions";

const Form = ({ dispatch, selectedType }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADDITEM, payload: { name, selectedType } });
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>{selectedType} list</h4>
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
