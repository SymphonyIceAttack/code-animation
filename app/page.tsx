"use client";
import { SortableContext } from "@dnd-kit/sortable";
import Navigation from "./components/Navigation";
import WorkSpace from "./components/WorkSpace";
import { useNavigationList } from "./hooks/use-navigation-list";
import { usePreviewCode } from "./hooks/use-preview-code";
export default function Home() {
	const [isPreviewCode, setisPreviewCode] = usePreviewCode();
	const [
		navigationList,
		setNavigationList,
		handleCodeEdit,
		createnavigation,
		deleteNavigationItem,
		handleActiveItem,
	] = useNavigationList(isPreviewCode);

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
					isPreviewCode={isPreviewCode}
					handlePreviewState={(isPreviewCode) => {
						setisPreviewCode(isPreviewCode);
					}}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</main>
		</SortableContext>
	);
}
