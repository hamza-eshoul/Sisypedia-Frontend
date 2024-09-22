// partials
import HomepageLayout from "./components/HomepageLayout";
import InsightCategories from "./components/InsightCategories";
import InsightsBody from "./components/InsightsBody";
import InsightsList from "./components/InsightsList";

const Homepage = () => {
  return (
    <HomepageLayout>
      <InsightCategories />
      <InsightsList />
      <InsightsBody />
    </HomepageLayout>
  );
};

export default Homepage;
