import ExploreMenu from "./components/exploreMenu";
import Main from "./components/main";
import ServicesPage from "./components/Services";
import TrustedBy from "./components/TrustedBy";
import Intro from "./components/ui/intro";
import LatestTech from "./components/ui/latestTech";
import Speciality from "./components/ui/speciality";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Main />
      <Intro />
      <Speciality />
      <TrustedBy />
      <LatestTech />
      <ServicesPage />
      <ExploreMenu />
    </div>
  );
}
