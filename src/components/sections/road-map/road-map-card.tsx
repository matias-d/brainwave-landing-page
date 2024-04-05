//@ts-ignore
import { grid, check2, loading1 } from '../../../assets';
import Tagline from '../../ui/tagline';

interface RoadMapI {
  id: string;
  title: string;
  text: string;
  date: string;
  status: string;
  imageUrl: any;
  colorful?: boolean;
}

interface RoadMapCardProps {
  card: RoadMapI;
}

export default function RoadMapCard({ card }: RoadMapCardProps) {
  const status = card.status === 'done' ? 'Done' : 'In progress';

  return (
    <div
      className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
        card.colorful ? 'bg-conic-gradient' : 'bg-n-6'
      }`}
    >
      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
        <div className="absolute top-0 left-0 max-w-full">
          <img
            className="w-full"
            src={grid}
            width={550}
            height={550}
            alt="Grid"
          />
        </div>
        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <Tagline>{card.date}</Tagline>

            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
              <img
                className="mr-2.5"
                src={card.status === 'done' ? check2 : loading1}
                width={16}
                height={16}
                alt={status}
              />
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="mb-10 -my-10 -mx-15">
            <img
              className="w-full"
              src={card.imageUrl}
              width={628}
              height={426}
              alt={card.title}
            />
          </div>
          <h4 className="h4 mb-4">{card.title}</h4>
          <p className="body-2 text-n-4">{card.text}</p>
        </div>
      </div>
    </div>
  );
}
