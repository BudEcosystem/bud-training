'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { TextField } from '@radix-ui/themes';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function Search(props: any) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
    props.onChange(term);
  }

  return (
    <div className="relative pt-2 max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <TextField.Root className='searchField'>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          size="3"
          type="text"
          name="search"
          id="search"
          disabled={props.disabled}
          className="h-10 block w-full rounded-md pl-9 sm:text-sm"
          placeholder="Search by name..."
          spellCheck={false}
          onChange={(e) => handleSearch(e.target.value)}
          color="gray"
          variant="soft"
        />
      </TextField.Root>
      {isPending && (
        <div className="absolute right-0 top-0 flex items-center justify-center h-10 ">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
