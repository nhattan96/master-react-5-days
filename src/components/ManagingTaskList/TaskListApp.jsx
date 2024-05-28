import { useState } from "react";
import Items from "./Items";

const TaskList = () => {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState(1);

  const onAddItem = () => {
    const name = "Item " + key;
    setKey(key + 1)
    items.push({name, key});
    setItems((prev) => [...items]);
  };

  return (
    <>
      <button onClick={onAddItem}>Add Item</button>
      <Items items={items} setItems={setItems}></Items>
    </>
  );
};

export default TaskList;
