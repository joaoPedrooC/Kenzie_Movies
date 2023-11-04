import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HeroSection } from "../../components/HeroSection/HeroSection";

export const InitialPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <HeroSection />
        </div>
      </main>
      <Footer />
    </>
  );
}