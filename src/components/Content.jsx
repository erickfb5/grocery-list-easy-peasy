import { ItemList } from "./";
import { useStoreState } from "easy-peasy";

const Content = () => {
  const { items, search } = useStoreState(state => state);
  const filteredItems = items.filter((item) => item?.item?.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      {filteredItems.length ? <ItemList />
      : <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      }
    </main>
  );
};

export default Content;