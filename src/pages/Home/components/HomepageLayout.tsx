// partials
import Header from "./Header";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

const HomepageLayout = ({ children }: HomepageLayoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-1 overflow-y-scroll">{children}</main>
    </div>
  );
};

export default HomepageLayout;
