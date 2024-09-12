import { FaTrashAlt } from "react-icons/fa";

const TodoRow = (props) => (
  <tr>
    <td>{props.item.action}</td>
    <td>
      <input
        type="checkbox"
        checked={props.item.done}
        onChange={() => props.callback(props.item)}
      />
    </td>
    <td>
      <button className="btn btn-danger" onClick={() => props.deleteTask(props.item.id)}>
        <FaTrashAlt />
      </button>
    </td>
  </tr>
);

export default TodoRow;
