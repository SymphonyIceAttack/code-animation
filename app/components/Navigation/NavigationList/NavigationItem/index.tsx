import type { navigationType } from "@/app/types/navigationType";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
interface Props {
	navigationItem: navigationType;
	deleteNavigationItem: (id: string) => void;
	handleActiveItem: (id: string) => void;
}
const NavigationItem = ({
	navigationItem,
	deleteNavigationItem,
	handleActiveItem,
}: Props) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: navigationItem.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			className="relative select-none transform-none w-full  group"
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<div
				onKeyDown={() => {}}
				onClick={() => {
					deleteNavigationItem(navigationItem.id);
				}}
				className="absolute z-10 hidden group-hover:block top-1.5 right-1.5 text-white bg-zinc-600 px-2 py-1 rounded-md"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-trash h-3 w-3"
				>
					<title>trash</title>
					<path d="M3 6h18" />
					<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
					<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
				</svg>
			</div>
			<div
				onClick={(e) => {
					handleActiveItem(navigationItem.id);
				}}
				onKeyDown={() => {}}
				className={`relative  bg-[#121212]  rounded-lg p-1 ${
					navigationItem.isActive ? "ring-blue-500 ring-2" : ""
				}`}
			>
				<img
					className="object-cover w-full h-full"
					alt=""
					src={navigationItem.image}
				/>
			</div>
			<span className="absolute z-10 font-[code] text-[10px] left-1 bottom-1 text-white">
				{navigationItem.index}
			</span>
		</div>
	);
};

export default NavigationItem;
