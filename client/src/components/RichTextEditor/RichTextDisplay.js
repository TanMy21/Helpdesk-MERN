import { Editor, EditorState, convertFromRaw } from "draft-js";
import { useEffect, useState } from "react";

const RichTextDisplay = ({ description }) => {


    const [richText, setRichText] = useState();

    useEffect(() => {
        setRichText(description)
    },[])

  console.log(description);

//   var editorState;
//   var contentState;
//   try {
//     // console.log(ticket?.description);
//     // console.log("Type of descirption:-  ", typeof ticket.description);

//     contentState = convertFromRaw(JSON.parse(description));
//     editorState = EditorState.createWithContent(contentState);

//     // console.log(contentState);
//     // console.log("Content State Type:- ", typeof contentState);

//     // console.log(editorState);
//     // console.log("Content state type:-  ", typeof editorState);

//     // setDescription(editorState);
//   } catch (error) {
//     console.log("Invalid:- ", error);
//   }

//   console.log("Outside:---- ", editorState);

  //   const getEditorState = (d) => {
  //     try {
  //       const contentState = convertFromRaw(JSON.parse(d));
  //       const editorState = EditorState.createWithContent(contentState);
  //       return editorState;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };


//   console.log(description);
//   console.log("Type:- ", typeof(description));

// //   console.log(JSON.parse(description));
//   console.log(convertFromRaw(JSON.parse(description)));


   const contentState = convertFromRaw(JSON.parse(richText));
   const editorState = EditorState.createWithContent(contentState);


  return (
    <>
      <Editor editorState={editorState} readOnly={true} />
    </>
  );
};

export default RichTextDisplay;
