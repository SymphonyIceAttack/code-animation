import React, { useState } from "react";

const CodeContent = () => {
	const [code, setcode] = useState("");
	return (
		<div className="relative aspect-video p-4">
			<textarea
				className="relative overflow-hidden whitespace-nowrap focus-visible:outline-none resize-none bg-transparent w-full z-10 h-full text-white caret-white font-[code] min-h-40 text-base"
				style={{ height: "24px !important" }}
				value={code}
				onChange={(e) => {
					setcode(e.target.value);
				}}
			/>
			<div className="absolute inset-0 asdfsadf">
				<div className="relative aspect-video p-4">
					<div className="h-full w-full relative text-white font-[code]">
						<pre
							className="text-base"
							style={{
								color: "#d6deeb",
								backgroundColor: "rgba(0,0,0,0)",
								fontFamily: "code",
							}}
						>
							<div className="token-line" style={{ color: "#d6deeb" }}>
								<span
									className="token plain"
									style={{ display: "inline-block" }}
								/>
							</div>
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeContent;
