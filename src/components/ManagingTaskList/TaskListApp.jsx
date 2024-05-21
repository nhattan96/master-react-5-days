import { useState } from "react";
import Items from "./Items";

const TaskList = () => {
  const [items, setItems] = useState([]);

  const onAddItem = () => {
    let item = "Item " + (items.length + 1);
    items.push(item);
    setItems((prev) => [...items]);
  };

  return (
    <>
      <button onClick={onAddItem}>Add Item</button>
      <Items items={items}></Items>
    </>
  );
};

export default TaskList;
