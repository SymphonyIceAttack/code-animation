import type { controlType } from "@/app/types/controlType";
import React, { type PropsWithChildren } from "react";
import ControlItem from "./ControlItem";
interface Props {
	controlList: controlType[];
}
const ControlList = ({ controlList, children }: PropsWithChildren<Props>) => {
	return (
		<div className="relative p-4 flex flex-col gap-4 ">
			{controlList.map((controlItem) => (
				<ControlItem key={controlItem.id} controlItem={controlItem} />
			))}
			{children}
		</div>
	);
};

export default ControlList;
