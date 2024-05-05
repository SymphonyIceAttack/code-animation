import React from "react";
interface Props {
	handlePreviewState: (isPreviewCode: boolean) => void;
}
const OperateButtonList = ({ handlePreviewState }: Props) => {
	return (
		<div className="mx-auto p-4 flex gap-4 bg-zinc-900 rounded-lg drop-shadow-xl">
			<button
				onClick={() => {
					handlePreviewState(true);
				}}
				className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-blue-900/50 hover:bg-blue-900/60 border border-blue-900 text-blue-300 text-xs h-8"
				type="button"
			>
				Preview
			</button>
			<button
				className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs h-8 w-20"
				type="button"
			>
				Export
			</button>
		</div>
	);
};

export default OperateButtonList;
