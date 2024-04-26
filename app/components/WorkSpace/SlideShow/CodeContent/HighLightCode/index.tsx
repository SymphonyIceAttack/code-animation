import type { navigationType } from "@/app/types/navigationType";
import { langs } from "@uiw/codemirror-extensions-langs";
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import React from "react";
interface Props {
	navigationList: navigationType[];
	handleCodeEdit: (code: string) => void;
}
const HighLightCode = ({ navigationList, handleCodeEdit }: Props) => {
	return (
		<>
			{navigationList.length !== 0 && (
				<CodeMirror
					theme={[
						draculaInit({
							settings: {
								background: "transparent",
								gutterBackground: "red",
							},
						}),
						EditorView.theme({
							"&": {
								fontSize: "1rem",
								lineHeight: "1.5rem",
							},
							"&.cm-editor.cm-focused": {
								outline: "none",
							},
						}),
					]}
					basicSetup={{
						lineNumbers: false,
						foldGutter: false,
						highlightActiveLine: false,
						autocompletion: false,
					}}
					editable={true}
					onChange={(e) => {
						const lines = e.split(/\r\n|\r|\n/);
						lines.length <= 16 && handleCodeEdit(e);
					}}
					value={
						navigationList.filter((item) => item.isActive === true)[0].code
					}
					height="384px"
					extensions={[langs.tsx()]}
				/>
			)}
		</>
	);
};

export default HighLightCode;
