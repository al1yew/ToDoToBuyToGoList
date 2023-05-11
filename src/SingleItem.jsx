import { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineDone } from "react-icons/md";
import { REMOVEITEM, UPDATEITEM, SETCOMPLETEDITEM } from "./actions";

const SingleItem = ({ item, dispatch, selectedType }) => {
    const [updatedValue, setUpdatedValue] = useState(null);
    const [update, setUpdate] = useState(false);
    const inputRef = useRef();

    const handleUpdate = (id) => {
        dispatch({
            type: UPDATEITEM,
            payload: { id, updatedValue, selectedType },
        });
        setUpdate(false);
    };

    useEffect(() => {
        if (update) {
            inputRef.current.focus();
        }
    }, [update]);

    return update ? (
        <div className="form-area">
            <textarea
                ref={inputRef}
                type="text"
                className="form-area-input"
                value={updatedValue ?? item.name}
                onChange={(e) => setUpdatedValue(e.target.value)}
            ></textarea>
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
                        type: SETCOMPLETEDITEM,
                        payload: { id: item.id, selectedType },
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
                    dispatch({
                        type: REMOVEITEM,
                        payload: { id: item.id, selectedType },
                    })
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
