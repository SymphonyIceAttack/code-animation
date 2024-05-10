import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import { usePreviewStore } from "@/app/providers/perview-store-provider";
import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import type { BundledLanguage } from "shiki";
import CodeContent from "./CodeContent";
import Mask from "./Mask";
import TitleBar from "./TitleBar";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
	mutiLanguage: LanguageOptionType;
	handleSelectMutiLanguage: (shikiHighLight: BundledLanguage) => void;
}
const SlideShow = ({
	handleCodeEdit,
	navigationList,
	mutiLanguage,
	handleSelectMutiLanguage,
}: Props) => {
	const isPreviewMode = usePreviewStore((state) => state.isPreviewMode);
	return (
		<div className="relative isolate">
			<Mask />
			<div
				className={`relative mx-auto bg-black/80 border border-zinc-800 rounded-lg shadow-2xl w-[48rem] ${
					isPreviewMode ? "ring-blue-500 ring-2" : ""
				}`}
			>
				<TitleBar
					mutiLanguage={mutiLanguage}
					handleSelectMutiLanguage={handleSelectMutiLanguage}
				/>

				<CodeContent
					mutiLanguage={mutiLanguage}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</div>
		</div>
	);
};

export default SlideShow;
