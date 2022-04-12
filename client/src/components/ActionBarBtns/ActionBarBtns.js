import "./action.bar.btns.css";
const ActionBarBtns = ({ allChecked, handleAllChecked, handleDelete }) => {
  return (
    <>
      <div className="action-bar-btns-container">
        <input
          type="checkbox"
          name="checkAll"
          id="actionbar-check-all"
          checked={!allChecked.some((ticket) => ticket?.isChecked !== true)}
          onChange={handleAllChecked}
        />
        <div className="action-bar-delete-btn" onClick={handleDelete}>Delete</div>
      </div>
    </>
  );
};

export default ActionBarBtns;
