"use client";
import { SortableContext } from "@dnd-kit/sortable";
import Navigation from "./components/Navigation";
import WorkSpace from "./components/WorkSpace";
import { useMutiLanguage } from "./hooks/use-muti-language";
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

	const [mutiLanguage, handleSelectMutiLanguage] = useMutiLanguage();

	return (
		<SortableContext items={navigationList}>
			<main className="h-screen w-full flex">
				<Navigation
					isPreviewCode={isPreviewCode}
					navigationList={navigationList}
					createnavigation={createnavigation}
					deleteNavigationItem={deleteNavigationItem}
					handleActiveItem={handleActiveItem}
				/>
				<WorkSpace
					mutiLanguage={mutiLanguage}
					handleSelectMutiLanguage={handleSelectMutiLanguage}
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
