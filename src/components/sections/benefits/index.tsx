import { benefits } from '../../../consts';
import { Container } from '../../ui/container';
import Title from '../../ui/title';
import CardBenefits from './card-benefits';

export default function Benefits() {
  return (
    <Container id="features">
      <section className="container relative z-2">
        <Title
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((benefit) => (
            <CardBenefits key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </section>
    </Container>
  );
}
