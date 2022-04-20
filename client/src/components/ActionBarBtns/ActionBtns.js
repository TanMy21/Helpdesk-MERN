const ActionBtns = ({handleDelete, handleClose}) => {
  return (
    <>
      <div className="action-bar-delete-btn" onClick={handleDelete}>
        Delete
      </div>
      <div className="action-bar-close-btn" onClick={handleClose}>
        Close
      </div>
    </>
  );
};

export default ActionBtns;
