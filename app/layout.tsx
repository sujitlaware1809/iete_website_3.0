import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingChatButton } from '@/components/layout/floating-chat-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IETE Student Forum - SRM Institute',
  description: 'Institution of Electronics and Telecommunication Engineers Student Forum at SRM Institute of Science and Technology, Chennai (Vadapalani Campus)',
  keywords: 'IETE, SRM, Electronics, Telecommunications, Engineering, Student Forum, Chennai',
  icons: {
    icon: '/IETE-LOGO.webp',
    shortcut: '/IETE-LOGO.webp',
    apple: '/IETE-LOGO.webp',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  );
}