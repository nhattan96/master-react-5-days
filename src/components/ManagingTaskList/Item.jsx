import { useState } from "react";

const Item = ({ name, index, setItems }) => {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);

  const onRemove = () => {
    setItems((items) => {
      items = items.filter((item, index) => {
        if (item.key == index) return false;
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

    setItems((prev) => {
      prev[index] = event.target.value;
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
