import type { navigationType } from "@/app/types/navigationType";
import React, { useEffect, useState } from "react";
import { bundledThemes, getHighlighter } from "shiki";
import { ShikiMagicMove } from "shiki-magic-move/react";
import "./index.css";
interface Props {
	navigationList: navigationType[];
}
const index = ({ navigationList }: Props) => {
	const [shikiHighLight, setshikiHighLight] = useState<Awaited<
		ReturnType<typeof getHighlighter>
	> | null>(null);

	useEffect(() => {
		getHighlighter({
			themes: [bundledThemes.dracula],
			langs: ["javascript", "typescript"],
		}).then((shiki) => {
			setshikiHighLight(shiki);
		});
	}, []);

	return (
		<div className="shikiContainer">
			{shikiHighLight !== null && navigationList.length > 0 && (
				<ShikiMagicMove
					className="overflow-auto"
					highlighter={shikiHighLight}
					theme={"dracula"}
					lang="ts"
					code={navigationList.filter((item) => item.isActive === true)[0].code}
				/>
			)}
		</div>
	);
};

export default index;
