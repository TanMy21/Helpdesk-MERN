import "./action.bar.btns.css";
import ActionBtns from "./ActionBtns";
const ActionBarBtns = ({
  checked,
  name,
  onChange,
  handleDelete,
  handleClose,
  showActionBtns,
}) => {
  return (
    <>
      <div className="action-bar-btns-container">
        <input
          type="checkbox"
          name={name}
          id="actionbar-check-all"
          checked={checked}
          onChange={onChange}
        />
        {showActionBtns ? (
          <ActionBtns handleDelete={handleDelete} handleClose={handleClose} />
        ) : null}
      </div>
    </>
  );
};

export default ActionBarBtns;
