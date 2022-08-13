import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { SearchIcon } from "@heroicons/react/solid";
import { nameState } from "../atoms/searchAtom";

export default function SearchBar() {
  const router = useRouter();
  const [searchText, setSearchText] = useRecoilState(nameState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = searchText;
    router.push({ pathname: `/search`, query: q ? { q } : {} });
  };

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 pl-4 items-center pointer-events-none">
        <SearchIcon className="h-5 w-5" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
          className="block pl-12 w-full text-base text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </form>
    </div>
  );
}
