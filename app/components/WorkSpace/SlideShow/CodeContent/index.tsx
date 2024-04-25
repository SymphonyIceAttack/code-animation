import React from "react";
import HighLightCode from "./HighLightCode";
import TextArea from "./TextArea";

const CodeContent = () => {
	return (
		<div className="relative aspect-video p-4">
			<TextArea />
			<HighLightCode />
		</div>
	);
};

export default CodeContent;
