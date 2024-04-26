import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import HighLightCode from "./HighLightCode";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
}
const CodeContent = ({ handleCodeEdit, navigationList }: Props) => {
	return (
		<div className="relative aspect-video p-4">
			<HighLightCode
				navigationList={navigationList}
				handleCodeEdit={handleCodeEdit}
			/>
		</div>
	);
};

export default CodeContent;
