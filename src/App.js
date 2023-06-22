import { useEffect } from "react";
import { Header, Content, Footer, AddItem, SearchItem } from "./components";
import { useStoreState } from "easy-peasy";

const App = () => {
  const { items } = useStoreState(state => state);
  
  
  useEffect(() => { localStorage.setItem("shoppingList", JSON.stringify(items)) }, [items]);

  return (
    <div className="App">
      <Header title="Grocery List App" />
        <AddItem />
        <SearchItem />
        <Content />
        <Footer />
    </div>
  );
};

export default App;