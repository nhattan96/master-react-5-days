import Item from "./Item";

const Items = (props) => {
  console.log(props.items, "items");
  return (
    <>
      <ul>
        {props.items.map((item, index) => {
          const { name, key } = props.items;

          return (
            <Item
              index={key}
              key={key}
              name={name}
              setItems={props.setItems}
            ></Item>
          );
        })}
      </ul>
    </>
  );
};

export default Items;
