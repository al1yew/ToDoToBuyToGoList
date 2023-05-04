import { useCallback } from "react";
import SingleItem from "./SingleItem";
import { toast } from "react-toastify";

const Items = ({ items, setItems }) => {
   const removeItem = (id) => setItems(items.filter((x) => x.id !== id));

   const submitUpdate = useCallback(({ id, updatedValue }) => {
      const updatedItems = items.map((item) => {
         if (item.id === id) {
            //esli eto tot samiy item, menayem ego
            return { ...item, name: updatedValue };
         }
         return item; //esli eto ne tot item, to prosto proxodim mimo i vozvrashayem. Map metod ne dayet nam noviy array
      });

      setItems(updatedItems);

      toast.success("Updated");
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
