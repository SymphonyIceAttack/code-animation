import { useEffect, useState } from "react";

export const usePreviewCode = (): [
	typeof isPreviewCode,
	typeof setisPreviewCode,
] => {
	const [isPreviewCode, setisPreviewCode] = useState(false);

	return [isPreviewCode, setisPreviewCode];
};
