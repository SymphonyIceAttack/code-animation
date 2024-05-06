import React from "react";

const index = () => {
	return (
		<div className="absolute flex flex-col justify-center items-center gap-1 bottom-4 inset-x-0 text-white">
			<div className="flex gap-1.5 items-center" style={{ opacity: 1 }}>
				<div className="aspect-square text-xs w-6 h-6 transition flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-arrow-left h-3 w-3"
					>
						<title>left</title>
						<path d="m12 19-7-7 7-7" />
						<path d="M19 12H5" />
					</svg>
				</div>
				<div className="aspect-square text-xs w-6 h-6 transition flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-arrow-right h-3 w-3"
					>
						<title>right</title>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</div>
				<span className="ml-1 text-xs text-zinc-300">
					arrow keys to change slides
				</span>
			</div>
		</div>
	);
};

export default index;
