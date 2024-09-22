// partials
import InsightBodyContent from "./InsightBodyContent";
import InsightBodyHeader from "./InsightBodyHeader";

const InsightsBody = () => {
  return (
    <section className="bg-primary flex-1">
      <InsightBodyHeader />
      <InsightBodyContent insight={null} />
    </section>
  );
};

export default InsightsBody;
