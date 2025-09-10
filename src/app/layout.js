import { Orbitron } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/common/CustomCursor';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata = {
  title: 'Jane Doe - Cyberpunk Portfolio',
  description: 'A futuristic developer portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ADDED bg-background and text-white HERE */}
      <body className={`${orbitron.variable} bg-black text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}