import "./tags.input.css";
import { AiFillCloseCircle } from "react-icons/ai";

const TagsInput = ({ tags, handleKeyDown, removeTag }) => {
  return (
    <>
      <div className="tags-input-container">
        {typeof tags === typeof [] && (
          <>
            {tags.map((tag, index) => (
              <div className="tag-item" key={index}>
                <span className="tag-text">{tag}</span>
                <span className="tag-close-icon">
                  <AiFillCloseCircle
                    onClick={() => removeTag(index)}
                    onKeyDown={removeTag}
                  />
                </span>
              </div>
            ))}
          </>
        )}

        <input
          type="text"
          className="tags-input"
          onKeyDown={handleKeyDown}
          placeholder="Add Tags and press right => arrow"
        />
      </div>
    </>
  );
};

export default TagsInput;
