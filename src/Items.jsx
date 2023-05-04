import { useCallback } from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, setItems }) => {
   const removeItem = (id) => setItems(items.filter((x) => x.id !== id));

   const submitUpdate = useCallback(({ id, updatedValue }) => {
      const updatedItems = items.map((item) => {
         if (item.id === id) {
            return { ...item, name: updatedValue };
         }
         return item;
      });
      setItems(updatedItems);
   });

   //esli ne sdelat usecallback, App.jsx renderitsa ved nash state naxoditsa tam, a s pomosyu callback mi predotvratili render

   return (
      <div className="items">
         {items?.map((item) => {
            return (
               <SingleItem
                  key={item.id}
                  submitUpdate={submitUpdate}
                  removeItem={removeItem}
                  item={item}
               />
            );
         })}
      </div>
   );
};
export default Items;
