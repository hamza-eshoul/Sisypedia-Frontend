import { FolderClosed } from "lucide-react";

const InsightCategories = () => {
  return (
    <aside className="bg-secondary w-60">
      <header className="flex justify-between bg-purple-500 px-3 py-2">
        <span>Categories</span>
        <FolderClosed />
      </header>
    </aside>
  );
};

export default InsightCategories;
