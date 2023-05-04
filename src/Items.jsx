import SingleItem from "./SingleItem";
import { DELETETODOS } from "./actions";

const Items = ({ items, dispatch }) => {
    return (
        <div className="items">
            {items?.map((item) => {
                return (
                    <SingleItem dispatch={dispatch} key={item.id} item={item} />
                );
            })}

            {items.length > 0 && (
                <button
                    className="btn"
                    style={{ marginTop: "30px" }}
                    onClick={() => dispatch({ type: DELETETODOS })}
                >
                    Delete All
                </button>
            )}
        </div>
    );
};
export default Items;
