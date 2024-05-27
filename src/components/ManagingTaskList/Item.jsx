import { useState } from "react";

const Item = (props) => {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(props.name);

  const onRemove = () => {
    props.setItems((items) => {
      items = items.filter((item, index) => {
        if (index == props.index) return false;
        else return true;
      });
      return [...items];
    });
  };

  const onModify = () => {
    setModifyOn((prev) => !prev);
  };

  const onChange = (event) => {
    console.log(event.target.value);

    setText((prev) => event.target.value);
  };

  const onBlur = (event) => {
    console.log(event.target.value);

    setModifyOn((prev) => !prev);

    props.setItems((prev) => {
      prev[props.index] = event.target.value;
      return [...prev];
    });
  };

  return (
    <li>
      {modifyOn ? (
        <input onChange={onChange} onBlur={onBlur} type="text" value={text} />
      ) : (
        <span>{text} </span>
      )}
      <button onClick={onModify}>Modify</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default Item;
