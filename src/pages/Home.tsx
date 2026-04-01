import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Projects from '@/components/Projects/Projects';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Blog from '@/components/Blog/Blog';
import FAQ from '@/components/FAQ/FAQ';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import FloatingCTA from '@/components/FloatingCTA/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
