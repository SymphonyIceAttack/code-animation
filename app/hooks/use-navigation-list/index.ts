import { usePreviewStore } from "@/app/providers/perview-store-provider";
import type { navigationType } from "@/app/types/navigationType";
import { useDndMonitor } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
const dataImage =
	"data:image/png;base64,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";
export const useNavigationList = (): [
	typeof navigationList,
	typeof setNavigationList,
	typeof handleCodeEdit,
	typeof createnavigation,
	typeof deleteNavigation,
	typeof handleActiveItem,
] => {
	const isPreviewMode = usePreviewStore((state) => state.isPreviewMode);
	const [navigationList, setNavigationList] = useState<navigationType[]>([
		{
			id: nanoid(),
			index: 1,
			image: dataImage,

			isActive: true,
			code: "const isExample = animations.some(() => {})",
		},
		{
			id: nanoid(),
			index: 2,
			image: dataImage,
			isActive: false,
			code: `const isExample = animations.some((animation) => {
				return animation.looksAwesome()
			  })`,
		},
		{
			id: nanoid(),
			index: 3,
			image: dataImage,
			isActive: false,
			code: "",
		},
	]);
	useDndMonitor({
		onDragEnd(event) {
			const { active, over } = event;
			if (over === null) {
				return;
			}

			if (active.id !== over.id) {
				setNavigationList((items) => {
					const oldIndex = items.findIndex((item) => item.id === active.id);
					const newIndex = items.findIndex((item) => item.id === over.id);
					return arrayMove(items, oldIndex, newIndex).map((item, index) => ({
						...item,
						index: index + 1,
					}));
				});
			}
		},
	});

	// if delete active item and length !==0 then turn the first active
	const deleteNavigation = (id: string) => {
		const deleteItem = navigationList.find((item) => item.id === id);
		if (deleteItem === undefined) {
			return;
		}
		const filterNavigationList = navigationList
			.filter((item) => item.id !== id)
			.map((item, index) => ({ ...item, index: index + 1 }));
		if (deleteItem.isActive && navigationList.length - 1 > 0) {
			setNavigationList(
				filterNavigationList.map((item, index) => {
					return {
						...item,
						isActive: index === 0,
					};
				}),
			);
		} else {
			setNavigationList(filterNavigationList);
		}
	};

	const createnavigation = () => {
		setNavigationList([
			...navigationList,
			{
				id: nanoid(),
				isActive: navigationList.length === 0,
				code: "",
				image: dataImage,
				index: navigationList.length + 1,
			},
		]);
	};

	const handleActiveItem = (id: string) => {
		setNavigationList(
			navigationList.map((item) => {
				return { ...item, isActive: item.id === id };
			}),
		);
	};
	const handleCodeEdit = (code: string) => {
		setNavigationList((navigationList) =>
			navigationList.map((item) => ({
				...item,
				code: item.isActive ? code : item.code,
			})),
		);
	};

	const previousNavigation = () => {
		const currentIndex = navigationList.findIndex((item) => item.isActive);
		if (currentIndex === 0) {
			return;
		}
		handleActiveItem(navigationList[currentIndex - 1].id);
	};
	const nextNavigation = () => {
		const currentIndex = navigationList.findIndex((item) => item.isActive);
		if (currentIndex === navigationList.length - 1) {
			return;
		}
		handleActiveItem(navigationList[currentIndex + 1].id);
	};

	const keyDown = (e: KeyboardEvent) => {
		if (!isPreviewMode) {
			return;
		}
		if (e.code === "ArrowRight") {
			nextNavigation();
			return;
		}
		if (e.code === "ArrowLeft") {
			previousNavigation();
			return;
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", keyDown);
		return () => {
			window.removeEventListener("keydown", keyDown);
		};
	}, [keyDown]);

	return [
		navigationList,
		setNavigationList,
		handleCodeEdit,
		createnavigation,
		deleteNavigation,
		handleActiveItem,
	];
};
