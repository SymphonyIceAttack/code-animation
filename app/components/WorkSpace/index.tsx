import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import OperateButtonList from "./OperateButtonList";
import SlideShow from "./SlideShow";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
}
const WorkSpace = ({ handleCodeEdit, navigationList }: Props) => {
	return (
		<div className="flex-1 px-6 lg:px-0 h-full bg-zinc-950 noise flex items-center justify-center">
			<div className="flex flex-col items-stretch justify-center gap-6 w-full">
				<SlideShow
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
				<OperateButtonList />
			</div>
		</div>
	);
};

export default WorkSpace;