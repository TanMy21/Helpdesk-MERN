const HeadingStyleControls = ({ toggleBlockType }) => {
  return (
    <div className="style-controls">
      <button
        className="heading-style-btn"
        onClick={() => toggleBlockType("header-one")}
      >
        H<sub>1</sub>
      </button>
      <button className="heading-style-btn" onClick={() => toggleBlockType("header-two")}>
        H<sub>2</sub>
      </button>
      <button className="heading-style-btn" onClick={() => toggleBlockType("header-three")}>
        H<sub>3</sub>
      </button>
    </div>
  );
};

export default HeadingStyleControls;
