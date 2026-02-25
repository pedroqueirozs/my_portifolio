import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { ProjectsList } from '../components/sections/ProjectsList';
import { Contact } from '../components/sections/Contact';
import { profileData } from '../data/profileData';

function Home() {
  return (
    <MainLayout>
      <Hero data={profileData} />
      <About data={profileData} />
      <Experience data={profileData} />
      <ProjectsList data={profileData} />
      <Contact data={profileData} />
    </MainLayout>
  );
}

export default Home;
