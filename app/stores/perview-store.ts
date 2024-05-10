import { createStore } from "zustand/vanilla";

export type PreviewState = {
	isPreviewMode: boolean;
};

export type PreviewActions = {
	openPreviewMode: () => void;
	closePriviewMode: () => void;
};

export type PreviewStore = PreviewState & PreviewActions;

export const defaultInitState: PreviewState = {
	isPreviewMode: false,
};

export const createPreviewStore = (
	initState: PreviewState = defaultInitState,
) => {
	return createStore<PreviewStore>()((set) => ({
		...initState,
		openPreviewMode: () => set((state) => ({ isPreviewMode: true })),
		closePriviewMode: () => set((state) => ({ isPreviewMode: false })),
	}));
};
