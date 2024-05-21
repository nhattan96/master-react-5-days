
const Item = (props) => {
  return (
    <li>
      <span>{props.name} </span>
      <button>Modify</button>
      <button>Remove</button>
    </li>
  )
}

export default Item