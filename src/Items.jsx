import SingleItem from "./SingleItem";
import { DELETEITEMS } from "./actions";

const Items = ({ items, dispatch, selectedType }) => {
    return (
        <div className="items">
            {items?.map((item) => {
                return (
                    <SingleItem
                        dispatch={dispatch}
                        key={item.id}
                        item={item}
                        selectedType={selectedType}
                    />
                );
            })}

            {items.length > 0 && (
                <button
                    className="btn"
                    style={{ marginTop: "30px" }}
                    onClick={() =>
                        dispatch({
                            type: DELETEITEMS,
                            payload: { selectedType },
                        })
                    }
                >
                    Delete All
                </button>
            )}
        </div>
    );
};
export default Items;
