"use client";

import { Loader2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");

  return (
    <div className='relative w-full h-14 flex flex-col bg-white'>
      <div className='relative h-14 z-10 rounded-md'>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='absolute inset-0 h-full'
          ref={inputRef}
        />
        <Button
          size={"sm"}
          className='absolute right-0 inset-y-0 h-full rounded-l-none'>
          <Search className='h-6 w-6' />
        </Button>
      </div>
    </div>
  );
}
