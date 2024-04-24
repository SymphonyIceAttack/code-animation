"use client";

import Content from "./components/Content";
import SideBar from "./components/SideBar";
import { useControlList } from "./hooks/use-control-list";
export default function Home() {
	const [controlList, setcontrolList] = useControlList();
	return (
		<main className="h-screen w-full flex">
			<SideBar controlList={controlList} />
			<Content />
		</main>
	);
}
