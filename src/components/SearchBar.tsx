import { useRecoilState } from "recoil";
import { SearchIcon } from "@heroicons/react/solid";
import { nameState } from "../atoms/searchAtom";

export default function SearchBar() {
  const [searchText, setSearchText] = useRecoilState(nameState);

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
        <SearchIcon className="h-5 w-5" />
      </div>
      <input
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="block p-4 pl-12 w-full text-base text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
