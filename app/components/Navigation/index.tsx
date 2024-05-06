import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import CreateButton from "./CreateButton";
import NavigationList from "./NavigationList";
interface Props {
	isPreviewCode: boolean;
	navigationList: navigationType[];
	createnavigation: () => void;
	deleteNavigationItem: (id: string) => void;
	handleActiveItem: (id: string) => void;
}

const SideBar = ({
	isPreviewCode,
	navigationList,
	createnavigation,
	deleteNavigationItem,
	handleActiveItem,
}: Props) => {
	return (
		<>
			{isPreviewCode ? null : (
				<div
					className={
						"relative z-[50] w-40 h-full border-r border-zinc-700 bg-black"
					}
				>
					<NavigationList
						handleActiveItem={handleActiveItem}
						navigationList={navigationList}
						deleteNavigationItem={deleteNavigationItem}
					>
						<CreateButton createnavigation={createnavigation} />
					</NavigationList>
				</div>
			)}
		</>
	);
};

export default SideBar;
