//@ts-ignore
import { service1, check } from '../../../assets';
import { brainwaveServices } from '../../../consts';
import { Generating } from '../../widgets/generating';

export default function ServiceCard1() {
  return (
    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
        <img
          src={service1}
          alt="Service 1"
          className="w-full h-full object-cover md:object-right"
          width={800}
          height={730}
        />
      </div>
      <div className="relative z-1 max-w-[17rem] ml-auto">
        <h4 className="h4 mb-4">Smartest AI</h4>
        <p className="body-2 mb-[3rem] text-n-3">
          Brainwave unlocks the potential of AI-powered applications
        </p>
        <ul className="body-2">
          {brainwaveServices.map((service) => (
            <li
              key={service}
              className="flex items-center py-4 border-t border-n-6"
            >
              <img src={check} alt="check" width={24} height={24} />
              <p className="ml-4">{service}</p>
            </li>
          ))}
        </ul>
      </div>

      <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-1/2" />
    </div>
  );
}
