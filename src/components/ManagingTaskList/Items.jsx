import Item from "./Item";

const Items = ({items, setItems}) => {
  console.log(items, "items");
  return (
    <>
      <ul>
        {items.map((item, index) => {
          const { name, key } = item;

          return (
            <Item
              index={key}
              key={key}
              name={name}
              setItems={setItems}
            ></Item>
          );
        })}
      </ul>
    </>
  );
};

export default Items;
