import Item from "./Item";

const Items = (props) => {
  return (
    <>
      <ul>
        {props.items.map((item, index) => (
          <Item index={index} name={item} setItems={props.setItems}></Item>
        ))}
      </ul>
    </>
  );
};

export default Items;
