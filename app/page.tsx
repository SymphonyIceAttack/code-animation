"use client";

import Content from "./components/Content";
import Navigation from "./components/Navigation";
import { useNavigationList } from "./hooks/use-navigation-list";
export default function Home() {
	const [navigationList, setNavigationList] = useNavigationList();
	return (
		<main className="h-screen w-full flex">
			<Navigation navigationList={navigationList} />
			<Content />
		</main>
	);
}
