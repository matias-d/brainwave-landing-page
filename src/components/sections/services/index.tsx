//@ts-ignore
import { brainwaveServices, brainwaveServicesIcons } from '../../../consts';
import { Gradient } from '../../design/Services';
import { Container } from '../../ui/container';
import Title from '../../ui/title';
import ServiceCard1 from './service-card-1';
import ServiceCard2 from './service-card-2';
import ServiceCard3 from './service-card-3';

export default function Services() {
  return (
    <Container id="how-to-use">
      <section className="container">
        <Title
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <ServiceCard1 />
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <ServiceCard2 />
            <ServiceCard3 />
          </div>

          <Gradient />
        </div>
      </section>
    </Container>
  );
}
