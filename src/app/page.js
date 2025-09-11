import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import ComingSoon from '@/components/sections/ComingSoon';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Experience />
      <Projects limit={3} showMoreLink={true} />
      <Skills />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
        <ComingSoon title="Design & Art" />
        <ComingSoon title="Game Development" />
      </div>
      <Contact />
    </main>
  );
}