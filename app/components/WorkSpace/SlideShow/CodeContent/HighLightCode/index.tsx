import React from "react";

const HighLightCode = () => {
	return (
		<div className="absolute inset-0">
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
	);
};

export default HighLightCode;
