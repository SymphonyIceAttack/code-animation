import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import CreateButton from "./CreateButton";
import NavigationList from "./NavigationList";
interface Props {
	navigationList: navigationType[];
}

const SideBar = ({ navigationList }: Props) => {
	return (
		<div className="relative z-[50] w-40 h-full border-r border-zinc-700 bg-black">
			<NavigationList navigationList={navigationList}>
				<CreateButton />
			</NavigationList>
		</div>
	);
};

export default SideBar;
