// @ts-ignore
import ButtonGradient from './assets/svg/ButtonGradient';

//Sections
import Collaboration from './components/sections/collaboration';
import Benefits from './components/sections/benefits';
import Services from './components/sections/services';
import RoadMap from './components/sections/road-map';
import Pricing from './components/sections/pricing';
import Hero from './components/sections/hero';

// Widgets
import Header from './components/widgets/header';
import Footer from './components/widgets/footer';

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <RoadMap />
        </main>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
