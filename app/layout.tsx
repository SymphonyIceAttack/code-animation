import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "shiki-magic-move/style.css";
import DndContextProvider from "./ContextProvider/DndContextProvider";
import { NextUIProvider } from "./ContextProvider/NextUIProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Code Animation",
	description: "animation with code to run",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<NextUIProvider>
					<DndContextProvider>{children}</DndContextProvider>
				</NextUIProvider>
			</body>
		</html>
	);
}
