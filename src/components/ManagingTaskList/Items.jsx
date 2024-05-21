import Item from "./Item";

const Items = (props) => {
  return (
    <>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index} name={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default Items;
