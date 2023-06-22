import { FaTrashAlt } from "react-icons/fa";

import { handleCheck, handleDelete } from "../utils";
import { useStoreActions, useStoreState } from "easy-peasy";

const ItemList = () => {
  const { items, search } = useStoreState(state => state);
  const { setItems } = useStoreActions(actions => actions);
  const filteredItems = items.filter((item) => item.item?.toLowerCase().includes(search.toLowerCase()))
  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id} className="item">
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id, filteredItems, setItems)}
            checked={item.checked}
          />
          <label
            style={item.checked ? { textDecoration: "line-through" }: null}
            onDoubleClick={() => handleCheck(item.id, filteredItems, setItems)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id, filteredItems, setItems)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;