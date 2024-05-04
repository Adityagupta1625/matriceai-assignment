'use client';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const inter = Inter({ subsets: ['latin'] });


export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token === undefined) {
      router.push('/login');
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}