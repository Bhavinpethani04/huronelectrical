import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Services } from './sections/Services';
import { WhyChoose } from './sections/WhyChoose';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
