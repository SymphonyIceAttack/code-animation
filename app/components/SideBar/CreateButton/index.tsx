import React from "react";

const CreateButton = () => {
	return (
		<button
			className="group cursor-pointer disabled:opacity-50 disabled:cursor-default aspect-video flex justify-center items-center h-full bg-[#1f1f1f] transition hover:bg-zinc-700 rounded-lg"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-plus h-5 w-5 text-zinc-100 group-hover:text-white"
			>
				<title>create</title>
				<path d="M5 12h14" />
				<path d="M12 5v14" />
			</svg>
		</button>
	);
};

export default CreateButton;
