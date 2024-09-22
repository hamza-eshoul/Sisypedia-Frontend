import { CirclePlay } from "lucide-react";

type InsightItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
};

interface InsightItemProps {
  item: InsightItem;
}

const InsightItem = ({ item }: InsightItemProps) => {
  return (
    <li className="relative flex cursor-pointer gap-3 border-b-[1px] border-black px-3 py-4 hover:bg-purple-400">
      <CirclePlay />
      <div className="flex flex-col gap-1 pt-0.5">
        <span>{item.title}</span>
        <span>{item.category}</span>
        <div className="flex italic">
          <span>{item.date} ~ </span>
          <span>{item.author}</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 rounded-tl-lg bg-purple-200 p-1 text-xs">
        {item.category.toUpperCase()}
      </div>
    </li>
  );
};

export default InsightItem;
