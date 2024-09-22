// partials
import { Brain } from "lucide-react";
import InsightsListSearchBar from "./InsightsListSearchBar";
import InsightItem from "./InsightItem";

const insightItems = [
  {
    id: 1,
    title: "HTML Structure",
    description:
      "Learn about HTML structure and its importance in web development.",
    category: "Web Development",
    date: "2023-01-01",
    author: "John Doe",
  },
  {
    id: 2,
    title: "CSS Flexbox",
    description:
      "Master the flexible box layout model for efficient web design.",
    category: "Web Design",
    date: "2023-02-15",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "JavaScript Promises",
    description:
      "Understand asynchronous programming with JavaScript Promises.",
    category: "JavaScript",
    date: "2023-03-22",
    author: "Alex Johnson",
  },
  {
    id: 4,
    title: "React Hooks",
    description: "Explore the power of React Hooks in functional components.",
    category: "React",
    date: "2023-04-10",
    author: "Emily Brown",
  },
  {
    id: 5,
    title: "Node.js Basics",
    description: "Get started with server-side JavaScript using Node.js.",
    category: "Backend Development",
    date: "2023-05-05",
    author: "Michael Lee",
  },
  {
    id: 6,
    title: "SQL Fundamentals",
    description: "Learn the basics of SQL for effective database management.",
    category: "Databases",
    date: "2023-06-18",
    author: "Sarah Connor",
  },
  {
    id: 7,
    title: "Git Version Control",
    description: "Master Git for efficient collaboration and code management.",
    category: "Development Tools",
    date: "2023-07-30",
    author: "David Wilson",
  },
  {
    id: 8,
    title: "Responsive Web Design",
    description:
      "Create websites that look great on all devices using responsive design techniques.",
    category: "Web Design",
    date: "2023-08-12",
    author: "Olivia Martinez",
  },
  {
    id: 9,
    title: "RESTful API Design",
    description:
      "Learn best practices for designing scalable and efficient RESTful APIs.",
    category: "Backend Development",
    date: "2023-09-25",
    author: "Robert Taylor",
  },
  {
    id: 10,
    title: "Web Accessibility",
    description:
      "Ensure your websites are accessible to all users, including those with disabilities.",
    category: "Web Development",
    date: "2023-10-08",
    author: "Grace Chen",
  },
  {
    id: 11,
    title: "TypeScript Essentials",
    description:
      "Enhance your JavaScript projects with TypeScript's static typing system.",
    category: "JavaScript",
    date: "2023-11-19",
    author: "Thomas Anderson",
  },
];

const InsightsList = () => {
  return (
    <section className="bg-secondary flex h-full w-96 flex-col">
      <InsightsListSearchBar />
      <div className="flex justify-between border-b-[1px] border-black px-3 py-4">
        <span>ALL INSIGHTS ({insightItems.length})</span>
        <Brain />
      </div>
      <ul className="flex-1 overflow-y-auto">
        {insightItems.map((item) => (
          <InsightItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default InsightsList;
