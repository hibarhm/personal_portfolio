"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Education from "@/components/Education";

// Dynamically import components that might still have issues
import dynamic from 'next/dynamic';
// const GalaxyBackground = dynamic(() => import("@/components/GalaxyBackground"), {
//   ssr: false,
//   loading: () => <div className="fixed inset-0 bg-black" />
// });
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div />
});

const Home = () => {
  return (
    <>
      {/* <GalaxyBackground /> */}
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Education />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;