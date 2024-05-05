import type { navigationType } from "@/app/types/navigationType";
import dynamic from "next/dynamic";
import React from "react";
import HighLightCode from "./HighLightCode";
const ShikiCode = dynamic(() => import("./ShikiCode"), { ssr: false });
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
	isPreviewCode: boolean;
}
const CodeContent = ({
	handleCodeEdit,
	navigationList,
	isPreviewCode,
}: Props) => {
	return (
		<div className="relative aspect-video p-4">
			{isPreviewCode ? (
				<ShikiCode navigationList={navigationList} />
			) : (
				<HighLightCode
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			)}
		</div>
	);
};

export default CodeContent;
