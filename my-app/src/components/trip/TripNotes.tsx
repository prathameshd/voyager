import { Box, TextField } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react"

export function TripNotes() {
  const [notes, setNotes] = useState<Array<any>>([]);
  const editor = useEditor({
    extensions: [StarterKit],
    content: ``,
  });

  // Ensure there's always space to click into
  // useEffect(() => {
  //     if (!editor) return;

  //     const ensureSpace = () => {
  //         const text = editor.getText();
  //         if (text.length < 50) {
  //             editor.commands.insertContent("<p></p><p></p><p></p>");
  //         }
  //     };

  //     editor.on("update", ensureSpace);
  //     // return () => editor.off("update", ensureSpace);
  // }, [editor]);

  return (
    <>
      <div className="editor-wrapper">
        <div className="editor-shell">
          <EditorContent editor={editor} />
        </div>
      </div>

      <div className="">
        <span className="text-xs text-gray-400">Notes are auto saved.</span>
      </div>
    </>
  )
}