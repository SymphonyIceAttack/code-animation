import React from "react";
import CodeContent from "./CodeContent";
import TopBar from "./TopBar";

const TextArea = () => {
	return (
		<div className="relative isolate">
			<div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
					}}
					className="relative aspect-[1155/678] w-[20rem] rotate-[30deg] bg-gradient-to-tr from-white to-slate-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="relative mx-auto bg-black/80 border border-zinc-800 rounded-lg shadow-2xl w-[48rem]">
				<TopBar />
				<CodeContent />
			</div>
		</div>
	);
};

export default TextArea;
