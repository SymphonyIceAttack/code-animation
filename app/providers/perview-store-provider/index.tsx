"use client";

import {
	type PropsWithChildren,
	createContext,
	useContext,
	useRef,
} from "react";
import { type StoreApi, useStore } from "zustand";

import {
	type PreviewStore,
	createPreviewStore,
} from "@/app/stores/perview-store";

export const PreviewStoreContext = createContext<StoreApi<PreviewStore> | null>(
	null,
);

export const PreviewStoreProvider = ({ children }: PropsWithChildren) => {
	const storeRef = useRef<StoreApi<PreviewStore>>();
	if (!storeRef.current) {
		storeRef.current = createPreviewStore();
	}

	return (
		<PreviewStoreContext.Provider value={storeRef.current}>
			{children}
		</PreviewStoreContext.Provider>
	);
};

export const usePreviewStore = <T,>(
	selector: (store: PreviewStore) => T,
): T => {
	const previewStoreContext = useContext(PreviewStoreContext);
	if (previewStoreContext === null) {
		throw new Error("useCounterStore must be use within CounterStoreProvider");
	}

	return useStore(previewStoreContext, selector);
};
