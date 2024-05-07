import type { Extension } from "@uiw/react-codemirror";
import { useState } from "react";
import type { BundledLanguage } from "shiki";
import { mutiLanguageList } from "./muti-language-list";

export type LanguageOptionType = {
	highLightExtension: Extension;
	shikiHighLight: BundledLanguage;
};

export const useMutiLanguage = (): [
	typeof mutiLanguage,
	typeof handleSelectMutiLanguage,
] => {
	const [mutiLanguage, setMutiLanguage] = useState<LanguageOptionType>(
		mutiLanguageList[0],
	);

	const handleSelectMutiLanguage = (shikiHighLight: BundledLanguage) => {
		setMutiLanguage(
			mutiLanguageList.find((item) => item.shikiHighLight === shikiHighLight) ||
				mutiLanguageList[0],
		);
	};

	return [mutiLanguage, handleSelectMutiLanguage];
};
