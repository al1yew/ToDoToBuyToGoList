import { useCallback } from "react";
import SingleItem from "./SingleItem";
import { toast } from "react-toastify";

const Items = ({ items, setItems, setLocalStorage }) => {
    const removeItem = useCallback((id) => {
        const newTodolist = items.filter((x) => x.id !== id);
        setItems(newTodolist);
        setLocalStorage(newTodolist);
        toast.warning("Deleted");
    });

    const submitUpdate = useCallback(({ id, updatedValue }) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: updatedValue ?? item.name,
                };
            }
            return item;
        });

        setItems(newItems);
        setLocalStorage(newItems);
        toast.success("Updated");
    });

    //esli ne sdelat usecallback, App.jsx renderitsa ved nash state naxoditsa tam, a s pomosyu callback mi predotvratili render

    const editItem = useCallback((id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });

        setItems(newItems);
        setLocalStorage(newItems);
    });

    const deleteAll = useCallback(() => {
        setItems([]);
        localStorage.removeItem("todo");
    });

    return (
        <div className="items">
            {items?.map((item) => {
                return (
                    <SingleItem
                        key={item.id}
                        submitUpdate={submitUpdate}
                        removeItem={removeItem}
                        item={item}
                        editItem={editItem}
                    />
                );
            })}
            {items.length > 0 && (
                <button
                    className="btn"
                    style={{ marginTop: "30px" }}
                    onClick={deleteAll}
                >
                    Delete All
                </button>
            )}
        </div>
    );
};
export default Items;
