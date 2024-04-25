"use client";

import Navigation from "./components/Navigation";
import WorkSpace from "./components/WorkSpace";
import { useNavigationList } from "./hooks/use-navigation-list";
export default function Home() {
	const [navigationList, setNavigationList] = useNavigationList();
	return (
		<main className="h-screen w-full flex">
			<Navigation navigationList={navigationList} />
			<WorkSpace />
		</main>
	);
}
