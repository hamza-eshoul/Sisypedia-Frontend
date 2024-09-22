import { Search } from "lucide-react";

const InsightsListSearchBar = () => {
  return (
    <header className="headers-padding flex gap-2 bg-purple-500">
      <Search />
      <input
        type="text"
        placeholder="Search 120 Insights in Category"
        className="font-inherit m-0 w-auto appearance-none border-none bg-transparent p-0 text-inherit focus:shadow-none focus:outline-none focus:ring-0"
      />
    </header>
  );
};

export default InsightsListSearchBar;
