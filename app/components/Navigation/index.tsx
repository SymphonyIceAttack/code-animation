import { usePreviewStore } from "@/app/providers/perview-store-provider";
import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import CreateButton from "./CreateButton";
import NavigationList from "./NavigationList";
interface Props {
	navigationList: navigationType[];
	createnavigation: () => void;
	deleteNavigationItem: (id: string) => void;
	handleActiveItem: (id: string) => void;
}

const SideBar = ({
	navigationList,
	createnavigation,
	deleteNavigationItem,
	handleActiveItem,
}: Props) => {
	const isPreviewMode = usePreviewStore((state) => state.isPreviewMode);
	return (
		<>
			<div
				className={
					"relative z-[50]  h-full border-r border-zinc-700 bg-black transition-all"
				}
				style={{
					width: isPreviewMode ? "0" : "10rem",
					overflow: isPreviewMode ? "hidden" : "",
				}}
			>
				<NavigationList
					handleActiveItem={handleActiveItem}
					navigationList={navigationList}
					deleteNavigationItem={deleteNavigationItem}
				>
					<CreateButton createnavigation={createnavigation} />
				</NavigationList>
			</div>
		</>
	);
};

export default SideBar;
