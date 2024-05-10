import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import { usePreviewStore } from "@/app/providers/perview-store-provider";
import type { navigationType } from "@/app/types/navigationType";
import dynamic from "next/dynamic";
import React from "react";
import HighLightCode from "./HighLightCode";
import HintArrow from "./HintArrow";
const ShikiCode = dynamic(() => import("./ShikiCode"), { ssr: false });
interface Props {
	handleCodeEdit: (code: string) => void;
	navigationList: navigationType[];

	mutiLanguage: LanguageOptionType;
}
const CodeContent = ({
	handleCodeEdit,
	navigationList,

	mutiLanguage,
}: Props) => {
	const isPreviewMode = usePreviewStore((state) => state.isPreviewMode);
	return (
		<div className="relative aspect-video p-4">
			{isPreviewMode ? (
				<>
					<ShikiCode
						mutiLanguage={mutiLanguage}
						navigationList={navigationList}
					/>
					<HintArrow />
				</>
			) : (
				<HighLightCode
					mutiLanguage={mutiLanguage}
					navigationList={navigationList}
					handleCodeEdit={handleCodeEdit}
				/>
			)}
		</div>
	);
};

export default CodeContent;
