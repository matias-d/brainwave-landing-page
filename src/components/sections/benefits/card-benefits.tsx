//@ts-ignore
import Arrow from '../../../assets/svg/Arrow';
//@ts-ignore
import ClipPath from '../../../assets/svg/ClipPath';
import { GradientLight } from '../../design/Benefits';
interface BenefitI {
  backgroundUrl: string;
  id: string;
  title: string;
  text: string;
  iconUrl: string;
  light?: boolean;
  imageUrl: string;
}

interface CardBenefistProps {
  benefit: BenefitI;
}

export default function CardBenefits({ benefit }: CardBenefistProps) {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${benefit.backgroundUrl})`,
      }}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{benefit.title}</h5>
        <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
        <div className="flex benefits-center mt-auto">
          <img
            src={benefit.iconUrl}
            width={48}
            height={48}
            alt={benefit.title}
          />
          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {benefit.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: 'url(#benefits)' }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {benefit.imageUrl && (
            <img
              src={benefit.imageUrl}
              width={380}
              height={362}
              alt={benefit.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
}
