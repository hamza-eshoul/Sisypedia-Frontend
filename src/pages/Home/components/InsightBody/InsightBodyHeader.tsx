import { Telescope } from "lucide-react";

const InsightBodyHeader = () => {
  return (
    <header className="headers-padding flex items-center justify-center bg-purple-700 text-xl">
      <div className="align-center flex justify-center gap-3">
        <span>Select an insight from the list </span>
        <Telescope />
      </div>
    </header>
  );
};

export default InsightBodyHeader;
