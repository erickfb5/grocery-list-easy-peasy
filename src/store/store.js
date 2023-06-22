import { createStore, action, computed } from "easy-peasy";

export const store = createStore({
    items: JSON.parse(localStorage.getItem("shoppingList")) || [],
    setItems: action((state, payload) => { state.items = payload }),
    newItem: "",
    setNewItem: action((state, payload) => { state.newItem = payload }),
    search: "",
    setSearch: action((state, payload) => { state.search = payload }),
    listCount: computed((state) => state.items.length)
});