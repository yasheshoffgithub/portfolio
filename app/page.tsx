import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "../components/Hero";
import { FaHome } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import Grid from "@/components/grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
