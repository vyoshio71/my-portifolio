import { Education } from "../../components/Education/Education";
import { Experience } from "../../components/Experience/Experience";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Languages from "../../components/Languages/Languages";
import { Navbar } from "../../components/Navbar/Navbar";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../../components/PageLoading/Loading";
import { useEffect, useState } from "react";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="bg-gradient-to-r from-[#141e30] to-[#243b55] lg:h-screen flex flex-col justify-around">
            <div className="lg:flex lg:justify-around items-center lg:mt-8">
              <Header />
              <Experience />
            </div>

            <div className="lg:flex lg:justify-around lg:items-center">
              <div className="flex flex-col justify-center items-center">
                <Languages />
                <Education />
              </div>

              <div className="flex justify-center items-center">
                <SocialMedia />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
