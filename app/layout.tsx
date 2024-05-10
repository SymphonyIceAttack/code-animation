import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "shiki-magic-move/style.css";
import "./globals.css";
import DndContextProvider from "./providers/dnd-context-provider";
import { NextUIProvider } from "./providers/next-ui-provider";
import { PreviewStoreProvider } from "./providers/perview-store-provider";
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
				<PreviewStoreProvider>
					<NextUIProvider>
						<DndContextProvider>{children}</DndContextProvider>
					</NextUIProvider>
				</PreviewStoreProvider>
			</body>
		</html>
	);
}
