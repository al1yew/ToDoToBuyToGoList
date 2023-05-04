import { useState } from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import Items from "./Items";
const App = () => {
   const [items, setItems] = useState([]);

   const removeItem = (id) => setItems(items.filter((x) => x.id != id));

   return (
      <section className="section-center">
         <Form setItems={setItems} />
         <Items items={items} removeItem={removeItem} />
         <ToastContainer />
      </section>
   );
};

export default App;
