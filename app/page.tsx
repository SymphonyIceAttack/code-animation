"use client";
import { SortableContext } from "@dnd-kit/sortable";
import Navigation from "./components/Navigation";
import WorkSpace from "./components/WorkSpace";
import { useNavigationList } from "./hooks/use-navigation-list";
export default function Home() {
	const [navigationList, setNavigationList, handleCodeEdit] =
		useNavigationList();
	return (
		<SortableContext items={navigationList}>
			<main className="h-screen w-full flex">
				<Navigation navigationList={navigationList} />
				<WorkSpace
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</main>
		</SortableContext>
	);
}
