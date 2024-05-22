const Item = (props) => {
  const onRemove = () => {
    props.setItems((items) => {
      items = items.filter((item, index) => {
        if (index == props.index) return false;
        else return true;
      });
      return [...items];
    });
  };

  return (
    <li>
      <span>{props.name} </span>
      <button>Modify</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
  
};

export default Item;
