import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import {
  faHouse,
  faPaintRoller,
  faUsers,
  faRocket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/Video';
import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Info from '@/components/Info';
import Quote from '@/components/Quote';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import ProjectShowcase from '@/components/ProjectShowcase';
import Gallery from '@/components/Gallery';
import Slider from '@/components/Slider';
import Image from 'next/image';
import Divider from '@/components/Divider';
import TeamIntroduction from '@/components/TeamIntroduction';
import Testimonials from '@/components/Testimonials';
import ClientFeedback from '@/components/ClientFeedback';
import ThreeDTour from '@/components/ThreeDTour';
import WhyChooseUs from '@/components/WhyChooseUs';
import SignUp from '@/components/SignUp';
import Contacts from '@/components/Contacts';
import VideoRestetica from '@/components/VideoRestetica';
import DifficultSolutions from '@/components/DifficultSolutions';
import ProjectCost from '@/components/ProjectCost';
import GalleryPortfolio from '@/components/GelleryPortfolio';
import Quotes from '@/components/Quotes';
import Consultation from '@/components/Consultation';

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
      <Quotes />
      <Consultation />
      <Contacts />
    </main>
  );
}
