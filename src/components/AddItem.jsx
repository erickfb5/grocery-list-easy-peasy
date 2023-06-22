import {  useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useStoreActions, useStoreState } from "easy-peasy";

import { handleSubmit } from "../utils";

const AddItem = () => {
  const inputRef = useRef();
  const { items, newItem} = useStoreState(state => state);
  const { setItems, setNewItem} = useStoreActions(actions => actions);
  return (
    <form
      className="addForm"
      onSubmit={(event) => handleSubmit(event, items, setItems, newItem, setNewItem)}
    >
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        autoComplete="off"
        maxLength={50}
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;