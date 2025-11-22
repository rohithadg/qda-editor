import { use } from 'react';
import AppLayout from '@/components/layout/AppLayout';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AppLayout projectId={id} />;
}