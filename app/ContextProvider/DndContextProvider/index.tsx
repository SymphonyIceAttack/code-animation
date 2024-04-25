"use client";
import { DndContext } from "@dnd-kit/core";
import React, { useId, type PropsWithChildren } from "react";
const DndContextProvider = ({ children }: PropsWithChildren) => {
	const id = useId();
	return <DndContext id={id}>{children}</DndContext>;
};

export default DndContextProvider;
