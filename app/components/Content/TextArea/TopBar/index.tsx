import React from "react";

const TopBar = () => {
	return (
		<div className="relative flex items-center justify-center px-2 py-4">
			<div className="absolute left-0 p-4 flex gap-2">
				<button
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-700 w-8 h-8 border border-zinc-700 text-zinc-300 text-xs bg-zinc-800"
					type="button"
				>
					1x
				</button>
				<button
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-700 w-8 h-8 border border-zinc-700 text-zinc-300 text-xs bg-zinc-800"
					type="button"
				>
					2x
				</button>
			</div>
			<div className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-400 ring-gray-800">
				<div className="relative">
					<svg
						className="absolute left-[-10px] h-1.5 w-1.5 fill-blue-500"
						style={{
							left: "42.3046px",
							top: "50%",
							transform: "translateY(-50%)",
						}}
						viewBox="0 0 6 6"
						aria-hidden="true"
					>
						<circle cx="3" cy="3" r="3" />
					</svg>
					<input
						tabIndex={-1}
						onChange={() => {}}
						className="bg-transparent focus:border-none focus:outline-none text-center pl-4"
						type="text"
						value="code.tsx"
					/>
				</div>
				<div className="absolute right-6 inset-y-0 flex items-center gap-3 text-zinc-700">
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
						className="lucide lucide-minus h-4 w-4"
					>
						<title>tes</title>
						<path d="M5 12h14" />
					</svg>
					<svg
						className="h-4 w-4 stroke-2"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<title>tes</title>
						<rect width="18" height="18" x="3" y="3" rx="2" />
					</svg>
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
						className="lucide lucide-x h-4 w-4"
					>
						<title>tes</title>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
