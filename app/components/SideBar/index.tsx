import type { controlType } from "@/app/types/controlType";
import React from "react";
import ControlList from "./ControlList";
import CreateButton from "./CreateButton";
interface Props {
	controlList: controlType[];
}

const SideBar = ({ controlList }: Props) => {
	return (
		<div className="relative z-[50] w-40 h-full border-r border-zinc-700 bg-black">
			<ControlList controlList={controlList}>
				<CreateButton />
			</ControlList>
		</div>
	);
};

export default SideBar;
