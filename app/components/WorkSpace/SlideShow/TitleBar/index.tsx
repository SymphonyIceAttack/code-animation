import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import { mutiLanguageList } from "@/app/hooks/use-muti-language/muti-language-list";
import { usePreviewStore } from "@/app/providers/perview-store-provider";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import React from "react";
import type { BundledLanguage } from "shiki";

interface Props {
	mutiLanguage: LanguageOptionType;
	handleSelectMutiLanguage: (shikiHighLight: BundledLanguage) => void;
}

const TitleBar = ({ mutiLanguage, handleSelectMutiLanguage }: Props) => {
	const isPreviewMode = usePreviewStore((state) => state.isPreviewMode);
	return (
		<div
			className={"relative flex items-center justify-center transition-all"}
			style={{
				height: isPreviewMode ? "0px" : "",
				padding: isPreviewMode ? "0px" : "1rem 0.5rem",
				overflow: isPreviewMode ? "hidden" : "",
			}}
		>
			<div className="absolute left-0 p-4 flex gap-2">
				<button
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-700 w-8 h-8 border border-zinc-700 text-zinc-300 text-xs bg-zinc-800"
					type="button"
				>
					1x
				</button>
				<button
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-700 w-8 h-8 border border-zinc-700 text-zinc-300 text-xs bg-zinc-800"
					type="button"
				>
					2x
				</button>
			</div>
			<div className="flex items-center gap-x-1.5 w-48">
				<Select
					isRequired
					label="Select an Language"
					className="max-w-xs"
					placeholder="Current Language"
					selectedKeys={[mutiLanguage.shikiHighLight]}
					defaultSelectedKeys={[mutiLanguageList[0].shikiHighLight]}
					onChange={(e) => {
						handleSelectMutiLanguage(e.target.value as BundledLanguage);
					}}
				>
					{mutiLanguageList.map((lang) => (
						<SelectItem key={lang.shikiHighLight} value={lang.shikiHighLight}>
							{lang.shikiHighLight}
						</SelectItem>
					))}
				</Select>

				<div className="absolute right-6 inset-y-0 flex items-center gap-3 text-zinc-700">
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
						className="lucide lucide-minus h-4 w-4"
					>
						<title>tes</title>
						<path d="M5 12h14" />
					</svg>
					<svg
						className="h-4 w-4 stroke-2"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<title>tes</title>
						<rect width="18" height="18" x="3" y="3" rx="2" />
					</svg>
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
						className="lucide lucide-x h-4 w-4"
					>
						<title>tes</title>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default TitleBar;
