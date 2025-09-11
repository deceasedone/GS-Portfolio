import Projects from '@/components/sections/Projects';

export const metadata = {
  title: 'Projects - Gaurav Sinha',
  description: 'Featured projects by Gaurav Sinha',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Projects />
    </main>
  );
}


