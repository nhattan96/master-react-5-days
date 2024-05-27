import Item from "./Item";

const Items = (props) => {
  console.log(props.items,'items')
  return (
    <>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index} index={index} name={item} setItems={props.setItems}></Item>
        ))}
      </ul>
    </>
  );
};

export default Items;
