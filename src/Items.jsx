import SingleItem from "./SingleItem";

const Items = ({ items, setItems, removeItem }) => {
   const submitUpdate = ({ id, updatedValue }) => {
      const updatingItem = items.find((item) => item.id === id);

      updatingItem.name = updatedValue;

      setItems(items);
   };

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
