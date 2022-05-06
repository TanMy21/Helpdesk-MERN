import { AiOutlineOrderedList } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";

const ListControls = ({ toggleBlockType }) => {
  return (
    <div className="style-controls">
      <button
        className="list-style-btn"
        onClick={() => toggleBlockType("ordered-list-item")}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        className="list-style-btn"
        onClick={() => toggleBlockType("unordered-list-item")}
      >
        <AiOutlineUnorderedList />
      </button>
    </div>
  );
};

export default ListControls;
