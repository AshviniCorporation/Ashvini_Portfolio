import Main from "./components/main";
import Intro from "./components/ui/intro";
import Speciality from "./components/ui/speciality";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Main />
      <Intro />
      <Speciality />
    </div>
  );
}
