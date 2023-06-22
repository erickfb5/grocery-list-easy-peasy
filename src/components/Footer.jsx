import { useStoreState } from "easy-peasy";

const Footer = () => {
  const { listCount } = useStoreState((state) => state);
  return (
    <footer>
      {listCount !== 0 && (
        <p>{listCount} List {listCount === 1 ? "item" : "items"}</p>
      )}
    </footer>
  );
};

export default Footer;