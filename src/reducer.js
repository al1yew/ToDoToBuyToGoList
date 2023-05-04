import { ADDTODO, REMOVETODO, UPDATETODO, SETCOMPLETEDTODO, DELETETODOS } from "./actions"
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const reducer = (state, action) => {

    if (action.type === ADDTODO) {
        const { name } = action.payload

        if (name) {
            const newItems = [
                ...state.todo,
                {
                    name,
                    completed: false,
                    id: nanoid()
                }
            ];

            setLocalStorage(newItems);
            return { ...state, todo: newItems }
        }

        toast.error("Write!");
        return { ...state }
    }

    if (action.type === REMOVETODO) {
        const { id } = action.payload

        const newItems = state.todo.filter((x) => x.id !== id);
        setLocalStorage(newItems);
        toast.warning("Deleted");
        return { ...state, todo: newItems }
    }

    if (action.type === UPDATETODO) {
        const { id, updatedValue } = action.payload;

        const newItems = state.todo.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: updatedValue ?? item.name,
                };
            }
            return item;
        });

        setLocalStorage(newItems);
        toast.success("Updated");
        return { ...state, todo: newItems }
    }

    if (action.type === SETCOMPLETEDTODO) {
        const { id } = action.payload;

        const newItems = state.todo.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });

        setLocalStorage(newItems);
        return { ...state, todo: newItems }
    }

    if (action.type === DELETETODOS) {
        localStorage.removeItem("todo");
        return { ...state, todo: [] }
    }
}




export const setLocalStorage = (items) => {
    localStorage.setItem("todo", JSON.stringify(items));
};