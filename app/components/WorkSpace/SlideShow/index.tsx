import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import type { BundledLanguage } from "shiki";
import CodeContent from "./CodeContent";
import Mask from "./Mask";
import TitleBar from "./TitleBar";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
	isPreviewCode: boolean;
	mutiLanguage: LanguageOptionType;
	handleSelectMutiLanguage: (shikiHighLight: BundledLanguage) => void;
}
const SlideShow = ({
	handleCodeEdit,
	navigationList,
	isPreviewCode,
	mutiLanguage,
	handleSelectMutiLanguage,
}: Props) => {
	return (
		<div className="relative isolate">
			<Mask />
			<div
				className={`relative mx-auto bg-black/80 border border-zinc-800 rounded-lg shadow-2xl w-[48rem] ${
					isPreviewCode ? "ring-blue-500 ring-2" : ""
				}`}
			>
				<TitleBar
					mutiLanguage={mutiLanguage}
					handleSelectMutiLanguage={handleSelectMutiLanguage}
				/>
				<CodeContent
					mutiLanguage={mutiLanguage}
					isPreviewCode={isPreviewCode}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			</div>
		</div>
	);
};

export default SlideShow;
