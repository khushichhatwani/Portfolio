"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
<main className="relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-100 via-white to-purple text-gray-700 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen font-sans">

      <div className="max-w-7xl w-full">
      <FloatingNav
  navItems={[
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ]}
/>

<section id="home">
      <Hero />
    </section>

    <Grid />

    <section id="work">
      <RecentProjects />
    </section>

    {/* <Clients /> */}

    <section id="about">
      <Experience />
      <Approach />
    </section>

    <section id="contact">
      <Footer />
    </section>
      </div>
    </main>
  );
};

export default Home;
