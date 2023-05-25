import { useReducer, useState } from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import Items from "./Items";
import { reducer } from "./reducer";
import { types } from "./types";

const defaultState = {
    todo: JSON.parse(localStorage.getItem("todo")) ?? [],
    tobuy: JSON.parse(localStorage.getItem("tobuy")) ?? [],
    togo: JSON.parse(localStorage.getItem("togo")) ?? [],
    todotomorrow: JSON.parse(localStorage.getItem("todotomorrow")) ?? [],
    towatch: JSON.parse(localStorage.getItem("towatch")) ?? [],
    toread: JSON.parse(localStorage.getItem("toread")) ?? [],
    toachieve: JSON.parse(localStorage.getItem("toachieve")) ?? [],
    tocook: JSON.parse(localStorage.getItem("tocook")) ?? [],
    tocall: JSON.parse(localStorage.getItem("tocall")) ?? [],
    tovisit: JSON.parse(localStorage.getItem("tovisit")) ?? [],
    tolearn: JSON.parse(localStorage.getItem("tolearn")) ?? [],
    tocreate: JSON.parse(localStorage.getItem("tocreate")) ?? [],
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [selectedType, setSelectedType] = useState(types[0]);

    return (
        <main>
            <section className="tabmenu">
                <div className="menukeeper">
                    {types.map((type) => {
                        return (
                            <span
                                key={type}
                                className={
                                    type == selectedType ? "activespan" : null
                                }
                                onClick={() => setSelectedType(type)}
                            >
                                To{" "}
                                {type === "todotomorrow"
                                    ? "do tomorrow"
                                    : type.slice(2)}
                            </span>
                        );
                    })}
                </div>
            </section>

            <section className="section-center">
                <Form dispatch={dispatch} selectedType={selectedType} />
                <Items
                    items={state[selectedType]}
                    dispatch={dispatch}
                    selectedType={selectedType}
                />
                <ToastContainer autoClose={1000} />
            </section>
        </main>
    );
};

export default App;
