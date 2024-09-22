import {
  FolderClosed,
  Code,
  Palette,
  Globe,
  Zap,
  Server,
  Database,
  Lock,
  Cloud,
  Smartphone,
} from "lucide-react";

const insightCategoriesItems = [
  {
    id: 1,
    name: "HTML Structure",
    icon: <Code />,
  },
  {
    id: 2,
    name: "CSS Styling",
    icon: <Palette />,
  },
  {
    id: 3,
    name: "JavaScript Logic",
    icon: <Zap />,
  },
  {
    id: 4,
    name: "React Components",
    icon: <Globe />,
  },
  {
    id: 5,
    name: "Node.js Backend",
    icon: <Server />,
  },
  {
    id: 6,
    name: "Database Management",
    icon: <Database />,
  },
  {
    id: 7,
    name: "Web Security",
    icon: <Lock />,
  },
  {
    id: 8,
    name: "Cloud Deployment",
    icon: <Cloud />,
  },
  {
    id: 9,
    name: "Responsive Design",
    icon: <Smartphone />,
  },
  {
    id: 10,
    name: "Version Control",
    icon: <FolderClosed />,
  },
];

const InsightCategories = () => {
  return (
    <aside className="bg-secondary w-60 border-r-[1px] border-black">
      <header className="headers-padding flex justify-between bg-purple-500">
        <span>Categories</span>
        <FolderClosed />
      </header>

      <ul>
        {insightCategoriesItems.map((category) => (
          <li
            className="flex cursor-pointer gap-2 border-b-[1px] border-black px-3 py-4"
            key={category.id}
          >
            {category.icon}

            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default InsightCategories;
