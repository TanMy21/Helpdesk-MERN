import { BsTypeBold } from "react-icons/bs";
import { BsTypeItalic } from "react-icons/bs";
import { BsTypeUnderline } from "react-icons/bs";

const InlineStyleControls = ({ setInlineStyle }) => {
  return (
    <div className="style-controls">
      <button
        type="button"
        className="inline-style-btn"
        onClick={() => setInlineStyle("BOLD")}
      >
        <BsTypeBold />
      </button>
      <button
        className="inline-style-btn"
        onClick={() => setInlineStyle("ITALIC")}
      >
        <BsTypeItalic />
      </button>
      <button
        className="inline-style-btn"
        onClick={() => setInlineStyle("UNDERLINE")}
      >
        <BsTypeUnderline />
      </button>
    </div>
  );
};

export default InlineStyleControls;
