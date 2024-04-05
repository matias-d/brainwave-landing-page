import { roadmap } from '../../../consts';
import { Gradient } from '../../design/Roadmap';
import Button from '../../ui/button';
import { Container } from '../../ui/container';
import Title from '../../ui/title';
import RoadMapCard from './road-map-card';

export default function RoadMap() {
  return (
    <Container id="roadmap" className="overflow-hidden">
      <section className="relative container md:pb-10">
        <Title title="What we’re working on" tag="Ready to get started" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <RoadMapCard card={item} key={item.id} />
          ))}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </section>
    </Container>
  );
}
