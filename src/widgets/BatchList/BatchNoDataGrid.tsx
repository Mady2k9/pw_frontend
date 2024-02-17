import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { PackageOpenIcon } from 'lucide-react';

export function BatchNoDataGrid({ onReset }: { onReset: () => void }) {
  return <div
    className={'w-full rounded-md bg-zinc-100 gap-4 md:gap-6 py-6 md:py-12 flex flex-col items-center justify-center'}>
    <PackageOpenIcon className={'w-20 h-20 stroke-zinc-400'} />
    <p className={'text-lg font-medium'}>No batches found !</p>
    <Button onClick={onReset}>View All Batches</Button>
  </div>;
}
