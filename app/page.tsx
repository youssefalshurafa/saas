import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Reviews from '@/components/reviews';
import SectionDivider from '@/components/section-divider';
import SocialHub from '@/components/socialHub';

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Reviews />
      <SocialHub />
    </main>
  );
}
