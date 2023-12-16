import { Search } from "lucide-react";
import React from "react";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="lg:flex hidden items-center">
      <div className="relative w-full">
        <input
          type="search"
          name="search"
          placeholder="Search vehicle"
          value={value}
          onChange={onChange}
          style={{ boxShadow: "0px 9px 17px rgba(0, 0, 0, 0.07)" }}
          className="bg-white text-[#19202C] h-10 px-5 pl-10 rounded-md 
            text-sm focus:outline-none w-[773px]"
        />
        <button className="absolute left-0 top-0 mt-3 ml-4">
          <Search className="text-gray-400 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
