// partials
import HomepageLayout from "./components/HomepageLayout";
import InsightsBody from "./components/InsightBody";
import InsightCategories from "./components/InsightCategories";
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
