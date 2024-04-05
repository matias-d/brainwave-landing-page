//@ts-ignore
import { smallSphere, stars } from '../../../assets';
import { pricing } from '../../../consts';
import { LeftLine, RightLine } from '../../design/Pricing';

import { Container } from '../../ui/container';
import Title from '../../ui/title';
import PricingCard from './pricing-card';

export default function Pricing() {
  return (
    <Container id="pricing" className="overflow-hidden">
      <section className="relative container z-2">
        <div className="hidden relative justify-center lg:flex mb-[6.5rem]">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Title
          tag="Get started with Brainwave"
          title="Pay once, use forever
        "
        />

        <div className="relative">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
              <PricingCard item={item} key={item.id} />
            ))}
          </div>
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </section>
    </Container>
  );
}
