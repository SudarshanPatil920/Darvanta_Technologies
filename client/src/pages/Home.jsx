import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { About } from '../sections/About';
import { Testimonials } from '../sections/Testimonials';
import { ContactCTA } from '../sections/ContactCTA';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactCTA />
    </>
  );
}