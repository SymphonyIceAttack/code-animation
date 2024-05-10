"use client";
import {
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import React, { useId, type PropsWithChildren } from "react";
const DndContextProvider = ({ children }: PropsWithChildren) => {
	const id = useId();
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				delay: 150,
				tolerance: 5,
			},
		}),
	);
	return (
		<DndContext id={id} sensors={sensors}>
			{children}
		</DndContext>
	);
};

export default DndContextProvider;
