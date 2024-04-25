import type { navigationType } from "@/app/types/navigationType";
import React, { type PropsWithChildren } from "react";
import NavigationItem from "./NavigationItem";
interface Props {
	navigationList: navigationType[];
}
const NavigationList = ({
	navigationList,

	children,
}: PropsWithChildren<Props>) => {
	return (
		<div className="relative p-4 flex flex-col gap-4 ">
			{navigationList.map((navigationItem) => (
				<NavigationItem
					key={navigationItem.id}
					navigationItem={navigationItem}
				/>
			))}
			{children}
		</div>
	);
};

export default NavigationList;
