import React from "react";
import CodeContent from "./CodeContent";
import Mask from "./Mask";
import TitleBar from "./TitleBar";

const SlideShow = () => {
	return (
		<div className="relative isolate">
			<Mask />
			<div className="relative mx-auto bg-black/80 border border-zinc-800 rounded-lg shadow-2xl w-[48rem]">
				<TitleBar />
				<CodeContent />
			</div>
		</div>
	);
};

export default SlideShow;
