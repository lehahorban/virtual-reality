import Header from "@/page-components/Header/Header";
import Hero from "@/page-components/Hero/Hero";
import Introduction from "@/page-components/Introduction/Introduction";
import About from "@/page-components/About/About";
import Build from "@/page-components/Build/Build";
import Technologies from "@/page-components/Technologies/Technologies";
import HowBuild from "@/page-components/HowBuild/HowBuild";
import Join from "@/page-components/Join/Join";
import Footer from "@/page-components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Build />
        <Technologies />
        <HowBuild />
        <Join />
      </main>
      <Footer />
      <div style={{ height: "5px" }} />
    </>
  );
}
