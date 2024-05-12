"use client";
import { SortableContext } from "@dnd-kit/sortable";
import Navigation from "./components/Navigation";
import WorkSpace from "./components/WorkSpace";
import { useMutiLanguage } from "./hooks/use-muti-language";
import { useNavigationList } from "./hooks/use-navigation-list";
export default function Home() {
	const [
		navigationList,
		setNavigationList,
		handleCodeEdit,
		createnavigation,
		deleteNavigationItem,
		handleActiveItem,
	] = useNavigationList();

	const [mutiLanguage, handleSelectMutiLanguage] = useMutiLanguage();

	return (
		<SortableContext items={navigationList}>
			<main className="h-screen w-full flex">
				<Navigation
					navigationList={navigationList}
					createnavigation={createnavigation}
					deleteNavigationItem={deleteNavigationItem}
					handleActiveItem={handleActiveItem}
				/>
				<WorkSpace
					mutiLanguage={mutiLanguage}
					handleSelectMutiLanguage={handleSelectMutiLanguage}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</main>
		</SortableContext>
	);
}
