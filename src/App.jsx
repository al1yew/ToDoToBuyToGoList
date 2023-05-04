import { useReducer } from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import Items from "./Items";
import { reducer } from "./reducer";

const defaultState = {
    todo: JSON.parse(localStorage.getItem("todo")) ?? [],
    tobuy: JSON.parse(localStorage.getItem("tobuy")) ?? [],
    togo: JSON.parse(localStorage.getItem("togo")) ?? [],
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <section className="section-center">
            <Form dispatch={dispatch} />
            <Items items={state.todo} dispatch={dispatch} />
            <ToastContainer autoClose={1000} />
        </section>
    );
};

export default App;
