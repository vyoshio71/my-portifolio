import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Profile } from "../../About/components/Profile";
import { Skills } from "../../About/components/Skills";
import { Projects } from "../../About/components/Projects";

export const AboutView = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#141e30] to-[#243b55] flex flex-col justify-between">
        <Profile />

        <Skills />

        <Projects />
      </div>
      <Footer />
    </>
  );
};
