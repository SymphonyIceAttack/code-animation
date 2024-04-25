import React, { useState } from "react";

const TextArea = () => {
	const [code, setcode] = useState("");
	return (
		<textarea
			className="relative overflow-hidden whitespace-nowrap focus-visible:outline-none resize-none bg-transparent w-full z-10 h-full text-white caret-white font-[code] min-h-40 text-base"
			style={{ height: "24px !important" }}
			value={code}
			onChange={(e) => {
				setcode(e.target.value);
			}}
		/>
	);
};

export default TextArea;
