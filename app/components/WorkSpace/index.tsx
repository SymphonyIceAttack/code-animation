import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import { usePreviewCode } from "@/app/hooks/use-preview-code";
import type { navigationType } from "@/app/types/navigationType";
import React from "react";
import type { BundledLanguage } from "shiki";
import OperateButtonList from "./OperateButtonList";
import SlideShow from "./SlideShow";
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];
	isPreviewCode: boolean;
	handlePreviewState: (isPreviewCode: boolean) => void;
	mutiLanguage: LanguageOptionType;
	handleSelectMutiLanguage: (shikiHighLight: BundledLanguage) => void;
}
const WorkSpace = ({
	handleCodeEdit,
	navigationList,
	isPreviewCode,
	handlePreviewState,
	mutiLanguage,
	handleSelectMutiLanguage,
}: Props) => {
	return (
		<div className="flex-1 px-6 lg:px-0 h-full bg-zinc-950 noise flex items-center justify-center">
			<div className="flex flex-col items-stretch justify-center gap-6 w-full">
				<SlideShow
					mutiLanguage={mutiLanguage}
					handleSelectMutiLanguage={handleSelectMutiLanguage}
					isPreviewCode={isPreviewCode}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
				<OperateButtonList
					isPreviewCode={isPreviewCode}
					handlePreviewState={handlePreviewState}
				/>
			</div>
		</div>
	);
};

export default WorkSpace;
