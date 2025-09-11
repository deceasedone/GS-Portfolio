// src/app/layout.js

import { Orbitron } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/common/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import ClientLayout from '@/components/common/ClientLayout'; // 👈 IMPORT YOUR NEW COMPONENT

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata = {
  title: 'Gaurav Sinha - Portfolio', // You can update this
  description: 'A futuristic developer portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} bg-black text-white`}>
        <ScrollProgress className="fixed z-50 bg-synth-cyan" />
        <CustomCursor />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}