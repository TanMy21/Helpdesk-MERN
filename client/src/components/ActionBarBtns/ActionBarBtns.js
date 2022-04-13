import "./action.bar.btns.css";
const ActionBarBtns = ({ checked, name, onChange, handleDelete }) => {
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
        <div className="action-bar-delete-btn" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </>
  );
};

export default ActionBarBtns;
