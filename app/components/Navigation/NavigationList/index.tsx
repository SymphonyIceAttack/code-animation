import type { navigationType } from "@/app/types/navigationType";
import React, { type PropsWithChildren } from "react";
import NavigationItem from "./NavigationItem";
interface Props {
	navigationList: navigationType[];
	deleteNavigationItem: (id: string) => void;
	handleActiveItem: (id: string) => void;
}
const NavigationList = ({
	navigationList,
	deleteNavigationItem,
	children,
	handleActiveItem,
}: PropsWithChildren<Props>) => {
	return (
		<div className="relative p-4 flex flex-col gap-4 ">
			{navigationList.map((navigationItem) => (
				<NavigationItem
					handleActiveItem={handleActiveItem}
					key={navigationItem.id}
					navigationItem={navigationItem}
					deleteNavigationItem={deleteNavigationItem}
				/>
			))}
			{children}
		</div>
	);
};

export default NavigationList;
