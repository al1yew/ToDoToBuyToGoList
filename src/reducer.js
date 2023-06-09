import {
    ADDITEM,
    REMOVEITEM,
    UPDATEITEM,
    SETCOMPLETEDITEM,
    DELETEITEMS,
} from "./actions";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const reducer = (state, action) => {
    if (action.type === ADDITEM) {
        const { name, selectedType } = action.payload;

        if (name) {
            const newItems = [
                ...state[selectedType],
                {
                    name,
                    completed: false,
                    id: nanoid(),
                },
            ];

            toast.success(`Added into To ${selectedType.slice(2)} list`);
            setLocalStorage(newItems, selectedType);
            return { ...state, [selectedType]: newItems };
        }

        toast.error("Write!");
        return { ...state };
    }

    if (action.type === REMOVEITEM) {
        const { id, selectedType } = action.payload;

        const newItems = state[selectedType].filter((x) => x.id !== id);
        setLocalStorage(newItems, selectedType);
        toast.warning(`Deleted from To ${selectedType.slice(2)} list`);
        return { ...state, [selectedType]: newItems };
    }

    if (action.type === UPDATEITEM) {
        const { id, updatedValue, selectedType } = action.payload;

        const newItems = state[selectedType].map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: updatedValue ?? item.name,
                };
            }
            return item;
        });

        setLocalStorage(newItems, selectedType);
        toast.success(`Updated ${selectedType.slice(2)} list`);
        return { ...state, [selectedType]: newItems };
    }

    if (action.type === SETCOMPLETEDITEM) {
        const { id, selectedType } = action.payload;

        const newItems = state[selectedType].map((item) => {
            if (item.id === id) {
                item.completed
                    ? toast.warning("Ehh... Again?")
                    : toast.success("WOW! You do Good!");

                return { ...item, completed: !item.completed };
            }
            return item;
        });

        setLocalStorage(newItems, selectedType);

        return { ...state, [selectedType]: newItems };
    }

    if (action.type === DELETEITEMS) {
        const { selectedType } = action.payload;
        toast.warning(`Deleted all for ${selectedType}`);
        localStorage.removeItem(selectedType);
        return { ...state, [selectedType]: [] };
    }
};

//prioritize
//search

export const setLocalStorage = (items, selectedType) => {
    localStorage.setItem(selectedType, JSON.stringify(items));
};
