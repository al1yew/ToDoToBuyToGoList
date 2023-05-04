import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineDone } from "react-icons/md";
import { REMOVETODO, UPDATETODO, SETCOMPLETEDTODO } from "./actions";

const SingleItem = ({ item, dispatch }) => {
    const [updatedValue, setUpdatedValue] = useState(null);
    const [update, setUpdate] = useState(false);

    const handleUpdate = (id) => {
        dispatch({ type: UPDATETODO, payload: { id, updatedValue } });
        setUpdate(false);
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
                checked={item.completed}
                onChange={() =>
                    dispatch({
                        type: SETCOMPLETEDTODO,
                        payload: { id: item.id },
                    })
                }
            />
            <label htmlFor={item.id}>
                {item.completed ? (
                    <GiCrossMark className="underdone icon" />
                ) : (
                    <IoMdDoneAll className="done icon" />
                )}
            </label>

            <p
                style={{
                    textDecoration: item.completed && "line-through",
                    color: item.completed ? "red" : "green",
                }}
            >
                {item.name}
            </p>

            <button
                className="btn remove-btn"
                type="button"
                onClick={() =>
                    dispatch({ type: REMOVETODO, payload: { id: item.id } })
                }
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
