import { useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
    localStorage.setItem("todo", JSON.stringify(items));
};

const App = () => {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("todo")) ?? []
    );

    const addToDo = (name) => {
        const newItems = [...items, { name, completed: false, id: nanoid() }];
        setItems(newItems);
        setLocalStorage(newItems);
    };

    return (
        <section className="section-center">
            <Form addToDo={addToDo} />
            <Items
                setLocalStorage={setLocalStorage}
                items={items}
                setItems={setItems}
            />
            <ToastContainer autoClose={1000} />
        </section>
    );
};

export default App;
