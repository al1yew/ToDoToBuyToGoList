import { useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
const App = () => {
    const [items, setItems] = useState([]);

    return (
        <section className="section-center">
            <Form setItems={setItems} />
            <Items items={items} setItems={setItems} />
            <ToastContainer autoClose={1000} />
        </section>
    );
};

export default App;
