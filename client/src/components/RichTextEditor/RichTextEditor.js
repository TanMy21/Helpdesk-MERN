import { useState } from "react";

import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

import "./rich.css";
import HeadingStyleControls from "./HeadingStyleControls";
import InlineStyleControls from "./InlineStyleControls";
import ListControls from "./ListStyleControls";

const RichTextEditor = ({setDescription}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    
    if (newState) {
      setEditorState(newState);
    }
    
    return "not-handled";
  };
  
  const toggleBlockType = (blockType) => {
    console.log("Heading");
    const newState = RichUtils.toggleBlockType(editorState, blockType);
    setEditorState(newState);
  };
  
  const setInlineStyle = (inlineType) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineType);
    setEditorState(newState);
  };
  
  const onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    setEditorState(editorState);
    setDescription(JSON.stringify(convertToRaw(contentState)));
  };


  return (
    <>
      <div className="style-controls-containers">
        <HeadingStyleControls
          className="style-controls"
          toggleBlockType={toggleBlockType}
        />
        <InlineStyleControls
          className="style-controls"
          setInlineStyle={setInlineStyle}
        />
        <ListControls
          className="style-controls"
          toggleBlockType={toggleBlockType}
        />
      </div>
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </>
  );
};

export default RichTextEditor;
