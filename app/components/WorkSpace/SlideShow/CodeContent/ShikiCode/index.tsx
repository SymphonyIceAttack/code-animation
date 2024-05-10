import type { LanguageOptionType } from "@/app/hooks/use-muti-language";
import { mutiLanguageList } from "@/app/hooks/use-muti-language/muti-language-list";
import type { navigationType } from "@/app/types/navigationType";
import React, { useEffect, useState } from "react";
import { bundledThemes, getHighlighter } from "shiki";
import { ShikiMagicMove } from "shiki-magic-move/react";
import "./index.css";
interface Props {
	navigationList: navigationType[];
	mutiLanguage: LanguageOptionType;
}
const index = ({ navigationList, mutiLanguage }: Props) => {
	const [shikiHighLight, setshikiHighLight] = useState<Awaited<
		ReturnType<typeof getHighlighter>
	> | null>(null);

	useEffect(() => {
		getHighlighter({
			themes: [bundledThemes.dracula],
			langs: [mutiLanguage.shikiHighLight],
		}).then((shiki) => {
			setshikiHighLight(shiki);
		});
	}, [mutiLanguage]);

	return (
		<div className="shikiContainer py-1 h-[384px]">
			{shikiHighLight !== null && navigationList.length > 0 && (
				<ShikiMagicMove
					className="overflow-auto"
					highlighter={shikiHighLight}
					theme={"dracula"}
					lang={mutiLanguage.shikiHighLight}
					code={navigationList.filter((item) => item.isActive === true)[0].code}
				/>
			)}
		</div>
	);
};

export default index;
