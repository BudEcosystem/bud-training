import { CubeTransparentIcon } from '@heroicons/react/24/outline'

export default async function Loading() {
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <div className='absolute inset-0 bg-slate-900 opacity-10'></div>
      <CubeTransparentIcon className="animate-spin h-8 w-8 text-indigo-500" aria-hidden="true" />
    </div>
  );
}
