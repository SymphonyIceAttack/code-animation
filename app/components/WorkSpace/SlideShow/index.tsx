import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import CodeContent from "./CodeContent";
import Mask from "./Mask";
import TitleBar from "./TitleBar";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
}
const SlideShow = ({ handleCodeEdit, navigationList }: Props) => {
	return (
		<div className="relative isolate">
			<Mask />
			<div className="relative mx-auto bg-black/80 border border-zinc-800 rounded-lg shadow-2xl w-[48rem]">
				<TitleBar />
				<CodeContent
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</div>
		</div>
	);
};

export default SlideShow;
