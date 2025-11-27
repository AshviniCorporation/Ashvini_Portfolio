import Navbar from "./components/navbar";
import Main from "./components/main";
import Intro from "./components/ui/intro";
import Speciality from "./components/ui/speciality";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Main />
      <Intro />
      <Speciality />
      <Footer />
    </div>
  );
}
