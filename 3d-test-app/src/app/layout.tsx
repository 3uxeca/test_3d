import localFont from 'next/font/local';

import type { Metadata } from 'next';

import Sidebar from '@/widgets/sidebar';
import ReactQueryProvider from '@/shared/providers/ReactQueryProvider';

import './globals.css';

export const metadata: Metadata = {
  title: '3D Test APP',
  description: '혼잡도 3D 테스트',
};

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <ReactQueryProvider>
          <div className="aspect=[1920/1080] flex h-screen w-full">
            <Sidebar />
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
