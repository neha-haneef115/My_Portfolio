import Image from "next/image";
import Header from "@/component/Header";
import ProjectsSection from "@/component/Projectsec";
import HeroSection from "@/component/Heroscetion";
import AboutSection from "@/component/Aboutme";
import Myservices from '@/component/Myservices'
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Myservices/>
      <Skills/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
