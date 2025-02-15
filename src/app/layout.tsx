import '../styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

const pretendard = localFont({
	src: '../assets/fonts/PretendardVariable.woff2',
	display: 'swap',
	weight: '45 920',
	variable: '--font-pretendard'
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	icons: {
		icon: '/favicon.ico'
	}
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" className={pretendard.variable}>
			<body>{children}</body>
		</html>
	);
}
