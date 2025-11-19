'use client';

import { useEffect, useState } from 'react';
import EditorPage from '@/components/EditorPage';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main style={{ height: '100vh', width: '100%' }}>
      <EditorPage />
    </main>
  );
}
