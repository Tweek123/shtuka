import Hero from '@/app/ui/Hero';
import ProjectShowcase from '@/app/ui/ProjectShowcase';
import TeamIntroduction from '@/app/ui/TeamIntroduction';
import Testimonials from '@/app/ui/Testimonials';
import ClientFeedback from '@/app/ui/ClientFeedback';
import ThreeDTour from '@/app/ui/ThreeDTour';
import WhyChooseUs from '@/app/ui/WhyChooseUs';
import SignUp from '@/components/SignUp';
import Contacts from '@/components/Contacts';
import VideoRestetica from '@/app/ui/VideoRestetica';
import DifficultSolutions from '@/app/ui/DifficultSolutions';
import ProjectCost from '@/app/ui/ProjectCost';
import GalleryPortfolio from '@/app/ui/GelleryPortfolio';
import Quotes from '@/app/ui/Quotes';
import Consultation from '@/app/ui/Consultation';

/**
 * The `Home` component represents the main page layout of the website.
 * It includes several sections such as the hero section, project showcase,
 * video reviews, team introduction, owner profiles, client feedback, and testimonials.
 * Each section is wrapped in a `Section` component with content provided by various
 * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
 */
/**
 * The `Home` component represents the main page layout of the website.
 * It includes several sections such as the hero section, project showcase,
 * video reviews, team introduction, owner profiles, client feedback, and testimonials.
 * Each section is wrapped in a `Section` component with content provided by various
 * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
 */

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectShowcase />
      <TeamIntroduction />
      <Testimonials />
      <VideoRestetica />
      <ThreeDTour />
      <WhyChooseUs />
      <DifficultSolutions />
      <ProjectCost />
      <GalleryPortfolio />
      {/* <Quotes /> */}
      <Consultation />
      <Contacts />
    </main>
  );
}
