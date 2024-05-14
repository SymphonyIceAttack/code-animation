import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import type { navigationType } from "@/app/types/navigationType";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula";
import { EditorState, EditorView, basicSetup } from "@uiw/react-codemirror";
import * as random from "lib0/random";
import React, { useEffect, useRef } from "react";
// @ts-ignore
import { yCollab } from "y-codemirror.next";
import * as Y from "yjs";
interface Props {
	navigationList: navigationType[];
	handleCodeEdit: (code: string) => void;
	mutiLanguage: LanguageOptionType;
}
const HighLightCode = ({
	navigationList,
	handleCodeEdit,
	mutiLanguage,
}: Props) => {
	const codeMirrorRef = useRef<HTMLDivElement>(null);

	const usercolors = [
		{ color: "#30bced", light: "#30bced33" },
		{ color: "#6eeb83", light: "#6eeb8333" },
		{ color: "#ffbc42", light: "#ffbc4233" },
		{ color: "#ecd444", light: "#ecd44433" },
		{ color: "#ee6352", light: "#ee635233" },
		{ color: "#9ac2c9", light: "#9ac2c933" },
		{ color: "#8acb88", light: "#8acb8833" },
		{ color: "#1be7ff", light: "#1be7ff33" },
	];

	// select a random color for this user

	useEffect(() => {
		const userColor = usercolors[random.uint32() % usercolors.length];
		const ydoc = new Y.Doc();
		const provider = new TiptapCollabProvider({
			name: "codeMirror-test-2",
			appId: "rm8q80mo",
			token:
				"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTU2OTg2MDIsIm5iZiI6MTcxNTY5ODYwMiwiZXhwIjoxNzE1Nzg1MDAyLCJpc3MiOiJodHRwczovL2Nsb3VkLnRpcHRhcC5kZXYiLCJhdWQiOiJybThxODBtbyJ9.LteZlAG2vjwrzU2gqUIfWy-8UNbBUyYDF--Yt6X3u1Y",
			document: ydoc,
		});
		const ytext = ydoc.getText("codemirror");

		const undoManager = new Y.UndoManager(ytext);

		provider.awareness !== null
			? provider.awareness.setLocalStateField("user", {
					name: "SymIce",
					color: userColor.color,
					colorLight: userColor.light,
				})
			: null;

		const state = EditorState.create({
			doc: ytext.toString(),
			extensions: [
				basicSetup({
					lineNumbers: false,
					foldGutter: false,
					highlightActiveLine: false,
					autocompletion: false,
				}),
				mutiLanguage.highLightExtension,
				yCollab(ytext, provider.awareness, { undoManager }),
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
			],
		});

		const view = new EditorView({
			state,
			parent:
				codeMirrorRef.current === null ? undefined : codeMirrorRef.current,
		});
		return () => {
			provider.destroy();
			ydoc.destroy();
			view.destroy();
			provider.awareness?.destroy();
			undoManager.destroy();
		};
	}, [mutiLanguage]);

	return (
		<>
			{navigationList.length !== 0 && <div ref={codeMirrorRef} className="" />}
		</>
	);
};

export default HighLightCode;
